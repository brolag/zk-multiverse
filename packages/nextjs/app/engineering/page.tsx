"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import ZKMultiverseLogo from "~~/components/assets/ZKMultiverseLogo";

const languages = [
  {
    title: "Circom",
    image: "/images/languages/circom.png",
    link: "/circom",
  },
  {
    title: "Noir",
    image: "/images/languages/noir.png",
    link: "/noir",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div>
          <ZKMultiverseLogo />

          <div className="flex flex-row justify-around items-start space-x-10">
            {languages.map((language, index) => (
              <div key={index}>
                <Link href={language.link}>
                  <div className="w-24 mb-6 cursor-pointer">
                    <Image
                      src={language.image}
                      alt={language.title}
                      width={600}
                      height={400}
                      className="rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <h2 className="text-lg text-center font-play">{language.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
