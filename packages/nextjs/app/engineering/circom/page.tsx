"use client";

import React from "react";
import type { NextPage } from "next";

const steps = [
  { id: 1, title: "Step 1" },
  { id: 2, title: "Step 2" },
  { id: 3, title: "Step 3" },
  { id: 4, title: "Step 4" },
  { id: 5, title: "Step 5" },
  { id: 6, title: "Step 6" },
  // Añade más steps si es necesario
];

const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Home: NextPage = () => {
  const rows = chunkArray(steps, 3);

  return (
    <>
      <div className="flex items-center justify-center flex-col flex-grow mt-40">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row items-center mb-8">
            {row.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center mx-4">
                  <div className="flex flex-row text-center items-center font-play text-3xl">{step.title}</div>
                  <div
                    style={{ backgroundImage: "url(/images/step.png)" }}
                    className="bg-local flex flex-row justify-around items-start w-40 h-40 bg-cover"
                  />
                </div>
                {index < row.length - 1 && <div className="line-glow w-16 h-px mx-4"></div>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        .line-glow {
          background-color: white;
          box-shadow: 0 0 10px 2px white;
        }
      `}</style>
    </>
  );
};

export default Home;