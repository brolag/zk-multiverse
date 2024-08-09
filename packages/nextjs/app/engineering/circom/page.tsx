"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="flex items-center justify-items-stretch flex-col flex-grow mt-40">
        <h2 className="font-play text-[2.5rem] font-bold mb-20">Circom</h2>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row items-center mb-8">
            {row.map((step, index) => {
              const isLocked = step.id > 4;
              const content = (
                <div className={`flex flex-col items-center mx-4 ${isLocked ? "opacity-50" : ""} group`}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex flex-row text-center items-center font-play text-3xl cursor-pointer ${!isLocked && "group-hover:glow-title"}`}
                    >
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
                      className={`bg-local flex flex-row justify-around items-start w-40 h-40 bg-cover ${isLocked ? "grayscale" : "transition-transform duration-300 group-hover:scale-105"}`}
                    />
                  </div>
                </div>
              );

              return (
                <Fragment key={step.id}>
                  {isLocked ? (
                    content
                  ) : (
                    <Link href={`/engineering/circom/${step.id}`} passHref>
                      {content}
                    </Link>
                  )}
                  {index < row.length - 1 && <div className="line-glow w-16 h-px mx-4"></div>}
                </Fragment>
              );
            })}
          </div>
        ))}
      </div>
      <style jsx>{`
        .group:hover .group-hover\:glow-title {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </>
  );
};

export default Home;
