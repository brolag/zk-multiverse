"use client";

import type { NextPage } from "next";
import ZKMultiverseLogo from "~~/components/assets/ZKMultiverseLogo";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div>
          <ZKMultiverseLogo />
        </div>
      </div>
    </>
  );
};

export default Home;
