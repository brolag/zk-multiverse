"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import ZKMultiverseLogo from "~~/components/assets/ZKMultiverseLogo";

const languages = [
  {
    title: "Circom",
    image: "/images/languages/circom.png",
    link: "/engineering/circom",
    locked: false,
  },
  {
    title: "Noir",
    image: "/images/languages/noir.png",
    link: "/engineering/noir",
    locked: true,
  },
  {
    title: "Python",
    image: "/images/languages/python.png",
    link: "/engineering/python",
    locked: false,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <ZKMultiverseLogo />

        <div>
          <div className="flex flex-row justify-around items-start space-x-10">
            {languages.map((language, index) => (
              <div key={index} className="flex flex-col items-stretch justify-center">
                {language.locked ? (
                  <div className="w-64 mb-6 cursor-not-allowed relative">
                    <Image
                      src={language.image}
                      alt={language.title}
                      width={600}
                      height={400}
                      className="rounded-lg filter grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image src="/images/locked.png" alt="Locked" width={50} height={50} className="opacity-75" />
                    </div>
                  </div>
                ) : (
                  <Link href={language.link}>
                    <div className="w-64 mb-6 cursor-pointer">
                      <Image
                        src={language.image}
                        alt={language.title}
                        width={600}
                        height={400}
                        className="rounded-lg transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                )}
                <h2
                  className={`text-3xl text-center font-play ${language.locked ? "text-gray-500" : "hover:text-shadow-glow"}`}
                >
                  {language.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hover\\:text-shadow-glow:hover {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </>
  );
};

export default Home;
