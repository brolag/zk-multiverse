const Challenge4Content = () => (
  <div className="w-full max-w-[64rem] p-4 bg-gray-700 rounded-lg mb-6 font-play shadow-lg">
    <div className="mb-4">
      <h3 className="text-white text-xl font-bold">Puzzle: Knights and Knaves</h3>
      <p className="text-gray-300">
        This is a classic logic puzzle involving two characters, A and B. Each character is either a knight, who always tells the truth, or a knave, who always lies. Your task is to determine who is the knight and who is the knave based on their statements.
      </p>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Rules</h4>
      <ul className="text-gray-300">
        <li>- Knights always tell the truth.</li>
        <li>- Knaves always lie.</li>
      </ul>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Statements</h4>
      <ul className="text-gray-300">
        <li>Character A: "B is a knave.</li>
        <li>Character B: "A and I are of opposite types.</li>
      </ul>
    </div>
    <div className="mb-4">
      <h4 className="text-white text-lg font-bold">Task</h4>
      <p className="text-gray-300">
        Write a circuit in Circom that receives the selected value for each character and that the circuit can identify whether the selection of characters is correct or not. The circuit must be compiled using the PLONK protocol.
      </p>
    </div>
  </div>
);

export default Challenge4Content;
