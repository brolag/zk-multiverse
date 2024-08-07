"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { chunkArray } from "~~/utils/chunkArray";

const challenges = [
  { id: 1, title: "Challenge #1" },
  { id: 2, title: "Challenge #2" },
  { id: 3, title: "Challenge #3" },
  { id: 4, title: "Challenge #4" },
  { id: 5, title: "Challenge #5" },
  { id: 6, title: "Challenge #6" },
];

const Home: NextPage = () => {
  const rows = chunkArray(challenges, 3);

  return (
    <>
      <div className="flex items-center justify-center flex-col flex-grow mt-40">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row items-center mb-8">
            {row.map((step, index) => {
              const isLocked = step.id > 3;
              return (
                <Fragment key={step.id}>
                  <div className={`flex flex-col items-center mx-4 ${isLocked ? "opacity-50" : ""}`}>
                    <div className="flex flex-row text-center items-center font-play text-3xl">
                      {step.title}
                      {isLocked && (
                        <Image
                          src="/images/locked.png"
                          alt="Locked"
                          width={20}
                          height={20}
                          className="ml-2 opacity-75"
                        />
                      )}
                    </div>
                    <div
                      style={{ backgroundImage: "url(/images/step.png)" }}
                      className={`bg-local flex flex-row justify-around items-start w-40 h-40 bg-cover ${isLocked ? "grayscale" : ""}`}
                    />
                  </div>
                  {index < row.length - 1 && <div className="line-glow w-16 h-px mx-4"></div>}
                </Fragment>
              );
            })}
          </div>
        ))}
      </div>
      <style jsx>{`
        .line-glow {
          background-color: white;
          box-shadow: 0 0 10px 2px white;
        }
        .grayscale {
          filter: grayscale(100%);
        }
      `}</style>
    </>
  );
};

export default Home;
