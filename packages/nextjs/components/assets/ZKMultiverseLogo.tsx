import { Letter } from "./Letter";

const ZKMultiverseLogo = () => {
  const title = "ZK MULTIVERSE";
  return (
    <div className="flex flex-row space-x-3 mb-20">
      {title
        .split("")
        .map((letter, index) =>
          letter === " " ? <div key={index} className="w-20 h-20"></div> : <Letter key={index} letter={letter} />,
        )}
    </div>
  );
};

export default ZKMultiverseLogo;
