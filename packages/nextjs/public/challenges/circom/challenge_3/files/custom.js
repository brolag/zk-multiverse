const NETWORK_ID = 11155111

const MY_CONTRACT_ADDRESS = "0xCCa8c40aeA7Ef91249725C53e86764FBA527d845"
const MY_CONTRACT_ABI_PATH = "./abi.json"
var my_contract

var accounts
var web3

function metamaskReloadCallback() {
  window.ethereum.on('accountsChanged', (accounts) => {
    document.getElementById("web3_message").textContent="Se cambió el account, refrescando...";
    window.location.reload()
  })
  window.ethereum.on('networkChanged', (accounts) => {
    document.getElementById("web3_message").textContent="Se el network, refrescando...";
    window.location.reload()
  })
}

const getWeb3 = async () => {
  return new Promise((resolve, reject) => {
    if(document.readyState=="complete")
    {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        window.location.reload()
        resolve(web3)
      } else {
        reject("must install MetaMask")
        document.getElementById("web3_message").textContent="Error: Porfavor conéctate a Metamask";
      }
    }else
    {
      window.addEventListener("load", async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum)
          resolve(web3)
        } else {
          reject("must install MetaMask")
          document.getElementById("web3_message").textContent="Error: Please install Metamask";
        }
      });
    }
  });
};

const getContract = async (web3, address, abi_path) => {
  const response = await fetch(abi_path);
  const data = await response.json();

  const netId = await web3.eth.net.getId();
  contract = new web3.eth.Contract(
    data,
    address
    );
  return contract
}

async function loadDapp() {
  metamaskReloadCallback()
  document.getElementById("web3_message").textContent="Please connect to Metamask"
  var awaitWeb3 = async function () {
    web3 = await getWeb3()
    web3.eth.net.getId((err, netId) => {
      if (netId == NETWORK_ID) {
        var awaitContract = async function () {
          my_contract = await getContract(web3, MY_CONTRACT_ADDRESS, MY_CONTRACT_ABI_PATH)
          document.getElementById("web3_message").textContent="You are connected to Metamask"
          onContractInitCallback()
          web3.eth.getAccounts(function(err, _accounts){
            accounts = _accounts
            if (err != null)
            {
              console.error("An error occurred: "+err)
            } else if (accounts.length > 0)
            {
              onWalletConnectedCallback()
              document.getElementById("account_address").style.display = "block"
            } else
            {
              document.getElementById("connect_button").style.display = "block"
            }
          });
        };
        awaitContract();
      } else {
        document.getElementById("web3_message").textContent="Please connect to Scroll Testnet";
      }
    });
  };
  awaitWeb3();
}

async function connectWallet() {
  await window.ethereum.request({ method: "eth_requestAccounts" })
  accounts = await web3.eth.getAccounts()
  onWalletConnectedCallback()
}

loadDapp()

const onContractInitCallback = async () => {
  var publicInput = await my_contract.methods.publicInput().call()
  var contract_state = "Public input: " + publicInput
  console.log(contract_state);
  document.getElementById("contract_state").textContent = contract_state;
}

const onWalletConnectedCallback = async () => {
}


//// Functions ////

const sendProof = async (a, b) => {
  document.getElementById("web3_message").textContent="Generating proof...";

  const { proof, publicSignals } = await snarkjs.groth16.fullProve( { A_is_knight: a, B_is_knight: b}, "../zk_artifacts/myCircuit.wasm", "../zk_artifacts/myCircuit_final.zkey");

  const vkey = await fetch("../zk_artifacts/verification_key.json").then( function(res) {
    return res.json();
  });

  const res = await snarkjs.groth16.verify(vkey, publicSignals, proof);

  pA = proof.pi_a
  pA.pop()
  pB = proof.pi_b
  pB.pop()
  pC = proof.pi_c
  pC.pop()

  console.log(pA);
  console.log(pB);
  console.log(pC);
  console.log(publicSignals);

  document.getElementById("web3_message").textContent="Proof generated please confirm transaction.";

  const result = await my_contract.methods.sendProof(pA, pB, pC, publicSignals)
  .send({ from: accounts[0], gas: 0, value: 0 })
  .on('transactionHash', function(hash){
    document.getElementById("web3_message").textContent="Executing...";
  })
  .on('receipt', function(receipt){
    document.getElementById("web3_message").textContent="Success.";    })
  .catch((revertReason) => {
    console.log("ERROR! Transaction reverted: " + revertReason.receipt.transactionHash)
  });
}