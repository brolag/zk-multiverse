"use client";

import React, { useState } from "react";

function Verifier() {
  const [characterA, setCharacterA] = useState("Knight");
  const [characterB, setCharacterB] = useState("Knight");
  const [result, setResult] = useState("No proof yet");

  const verify = () => {
    if (characterA === "Knight" && characterB === "Knave") {
      setResult("Valid proof");
    } else {
      setResult("Invalid proof");
    }
  };

  return (
    <div className="grid grid-cols-3 items-center p-4 bg-gray-800 rounded-lg font-play gap-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <img src="/images/user.png" alt="User Icon" className="w-6 h-6 mr-2" />
          <select
            className="bg-gray-700 text-white p-2 rounded"
            value={characterA}
            onChange={e => setCharacterA(e.target.value)}
          >
            <option value="Knight">Knight</option>
            <option value="Knave">Knave</option>
          </select>
        </div>
        <div className="flex items-center">
          <img src="/images/user.png" alt="User Icon" className="w-6 h-6 mr-2" />
          <select
            className="bg-gray-700 text-white p-2 rounded"
            value={characterB}
            onChange={e => setCharacterB(e.target.value)}
          >
            <option value="Knight">Knight</option>
            <option value="Knave">Knave</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="glow-button bg-black text-blue-400 flex items-center justify-center p-2 rounded"
          onClick={verify}
        >
          <img src="/images/play.png" alt="Play Icon" className="w-4 h-4 mr-2" />
          Verify
        </button>
      </div>
      <div className="text-white text-center">Results: {result}</div>
    </div>
  );
}

export default Verifier;
