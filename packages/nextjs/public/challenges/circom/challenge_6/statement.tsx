const Challenge6Content = () => (
  <div className="w-full max-w-[64rem] p-4 bg-gray-700 rounded-lg mb-6 font-play shadow-lg">
    <div className="mb-4">
      <h3 className="text-white text-xl font-bold">Challenge: Fibonacci Circuit</h3>
      <p className="text-gray-300">
        In this challenge, you will design a Circom circuit that computes the nth Fibonacci number based on the first
        two numbers provided as inputs. The Fibonacci sequence is defined as a series where each number is the sum of
        the two preceding ones, starting from two initial values.
      </p>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Rules</h4>
      <ul className="text-gray-300">
        <li>- The first two numbers of the sequence will be provided as inputs.</li>
        <li>
          - The circuit should compute the nth Fibonacci number using the standard recurrence relation: Fib(n) =
          Fib(n-1) + Fib(n-2).
        </li>
      </ul>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Objective</h4>
      <p className="text-gray-300">
        Write a Circom circuit that receives the first two numbers of the Fibonacci sequence and outputs the nth
        Fibonacci number. The circuit should be compiled using the Groth16 protocol, and the verification must be done
        on-chain.
      </p>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Steps</h4>
      <ul className="text-gray-300">
        <li>1. Define the circuit to compute the Fibonacci sequence using the recurrence relation.</li>
        <li>2. Use input values for the first two Fibonacci numbers to start the sequence.</li>
        <li>3. Compile the circuit using Groth16.</li>
        <li>4. Deploy the verification logic on-chain to verify the output.</li>
      </ul>
    </div>
  </div>
);

export default Challenge6Content;
