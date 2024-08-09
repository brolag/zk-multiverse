"use client";

import React, { useState } from "react";
import Image from "next/image";
import { generateAndVerifyProof } from "~~/utils/generateAndVerifyProof";

function Verifier() {
  const [characterA, setCharacterA] = useState(0);
  const [characterB, setCharacterB] = useState(0);
  const [result, setResult] = useState("No proof yet");

  const verify = async () => {
    const result = (await generateAndVerifyProof(characterA, characterB)) ? "Valid proof" : "Invalid proof";
    setResult(result);
  };

  return (
    <div className="grid grid-cols-3 items-center p-4 bg-gray-800 rounded-lg font-play gap-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <Image src="/images/user.png" alt="User Icon" width={24} height={24} className="mr-2" />
          <select
            className="bg-gray-700 text-white p-2 rounded"
            value={characterA}
            onChange={e => setCharacterA(parseInt(e.target.value))}
          >
            <option value={1}>Knight</option>
            <option value={0}>Knave</option>
          </select>
        </div>
        <div className="flex items-center">
          <Image src="/images/user.png" alt="User Icon" width={24} height={24} className="mr-2" />
          <select
            className="bg-gray-700 text-white p-2 rounded"
            value={characterB}
            onChange={e => setCharacterB(parseInt(e.target.value))}
          >
            <option value={1}>Knight</option>
            <option value={0}>Knave</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="glow-button bg-black text-blue-400 flex items-center justify-center p-2 rounded"
          onClick={verify}
        >
          <Image src="/images/play.png" alt="Play Icon" width={16} height={16} className="mr-2" />
          Verify
        </button>
      </div>
      <div className="text-white text-center">Results: {result}</div>
    </div>
  );
}

export default Verifier;
