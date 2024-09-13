const Challenge5Content = () => (
  <div className="w-full max-w-[64rem] p-4 bg-gray-700 rounded-lg mb-6 font-play shadow-lg">
    <div className="mb-4">
      <h3 className="text-white text-xl font-bold">Challenge: Magic Square Circuit</h3>
      <p className="text-gray-300">
        In this challenge, you will design a Circom circuit that verifies whether a given matrix is a valid magic
        square. A magic square is a grid where the sums of all rows, columns, and diagonals are equal. The circuit must
        ensure that these conditions hold for an n x n matrix, and the results will be verified on-chain using
        zk-SNARKs.
      </p>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Rules</h4>
      <ul className="text-gray-300">
        <li>- The matrix must be square (n x n).</li>
        <li>- The sum of each row, column, and diagonal must be equal.</li>
      </ul>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Objective</h4>
      <p className="text-gray-300">
        Write a Circom circuit that receives the matrix and its target sum as input and verifies that the matrix
        satisfies the magic square properties. The circuit should be compiled using the Groth16 protocol, and the
        verification must be done on-chain.
      </p>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Steps</h4>
      <ul className="text-gray-300">
        <li>1. Define the circuit to sum rows, columns, and diagonals.</li>
        <li>2. Add constraints to ensure all sums match the given target sum.</li>
        <li>3. Compile the circuit using Groth16.</li>
        <li>4. Deploy the verification logic on-chain.</li>
      </ul>
    </div>
  </div>
);

export default Challenge5Content;
