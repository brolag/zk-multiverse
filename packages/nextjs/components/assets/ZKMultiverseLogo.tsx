import Link from "next/link";
import { Letter } from "./Letter";

const ZKMultiverseLogo = () => {
  const title = "ZK MULTIVERSE";
  return (
    <Link href="/" passHref>
      <div className="flex flex-row space-x-3 mb-20 cursor-pointer">
        {title
          .split("")
          .map((letter, index) =>
            letter === " " ? <div key={index} className="w-20 h-20"></div> : <Letter key={index} letter={letter} />,
          )}
      </div>
    </Link>
  );
};

export default ZKMultiverseLogo;
