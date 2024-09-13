const ChallengeSudokuContent = () => (
  <div className="w-full max-w-[64rem] p-4 bg-gray-700 rounded-lg mb-6 font-play shadow-lg">
    <div className="mb-4">
      <h3 className="text-white text-xl font-bold">Challenge: Sudoku</h3>
      <p className="text-gray-300">
        In this challenge, you will design a Circom circuit that validates a Sudoku solution. The circuit will ensure
        that the provided solution follows the rules of Sudoku, where each number from 1 to 9 appears exactly once in
        each row, column, and 3x3 subgrid.
      </p>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Rules</h4>
      <ul className="text-gray-300">
        <li>- The solved grid must match the unsolved grid where numbers are pre-filled.</li>
        <li>- Each row, column, and 3x3 subgrid must contain the numbers 1 to 9 exactly once.</li>
      </ul>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Objective</h4>
      <p className="text-gray-300">
        Write a Circom circuit that takes a solved Sudoku grid as input and verifies that it is a valid solution. The
        circuit should ensure that all Sudoku rules are followed, and the solution should be verified on-chain.
      </p>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Steps</h4>
      <ul className="text-gray-300">
        <li>1. Define the circuit to check the validity of each number in the Sudoku grid.</li>
        <li>2. Ensure that each row, column, and 3x3 subgrid contains all numbers from 1 to 9.</li>
        <li>3. Compile the circuit using Groth16.</li>
        <li>4. Deploy the verification logic on-chain to verify the Sudoku solution.</li>
      </ul>
    </div>
  </div>
);

export default ChallengeSudokuContent;
