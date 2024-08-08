"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import ZKMultiverseLogo from "~~/components/assets/ZKMultiverseLogo";

const worlds = [
  {
    title: "Basics",
    image: "/images/planets/World_Map_01.png",
    link: "/basics",
    disabled: true,
  },
  {
    title: "Math",
    image: "/images/planets/World_Map_03.png",
    link: "/math",
    disabled: true,
  },
  {
    title: "Engineering",
    image: "/images/planets/World_Map_04.png",
    link: "/engineering",
    disabled: false,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <ZKMultiverseLogo />

        <div>
          <div className="flex flex-row justify-between items-start space-x-24">
            {worlds.map((world, index) => (
              <div key={index} className="flex flex-col items-stretch justify-center">
                {world.disabled ? (
                  <div className="w-56 mb-20 cursor-not-allowed relative">
                    <Image
                      src={world.image}
                      alt={world.title}
                      width={600}
                      height={400}
                      className="rounded-lg filter grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image src="/images/locked.png" alt="Locked" width={50} height={50} className="opacity-75" />
                    </div>
                  </div>
                ) : (
                  <Link href={world.link}>
                    <div className="w-56 mb-20 cursor-pointer">
                      <Image
                        src={world.image}
                        alt={world.title}
                        width={600}
                        height={400}
                        className="rounded-lg transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                )}
                <h2 className="text-3xl text-center font-play">{world.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
