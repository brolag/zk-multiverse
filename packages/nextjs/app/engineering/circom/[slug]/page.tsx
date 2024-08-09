import Image from "next/image";
import fs from "fs/promises";
import path from "path";
import Verifier from "~~/components/Verifier";
import AccordionItem from "~~/components/ui/AccordionItem";

type PageProps = {
  params: {
    slug: string;
  };
};

const getSteps = async (slug: string) => {
  const filePath = path.join(process.cwd(), "challenges", `challenge_${slug}/steps.json`);
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return data;
};

export default async function Page({ params }: PageProps) {
  const { title, steps } = await getSteps(params.slug);
  const challengeId = params.slug;

  return (
    <div className="flex items-center flex-col w-full pt-10">
      <div className="w-full max-w-[64rem] p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center mb-4">
          <Image src="/images/mission.png" alt="Mission" width={40} height={40} className="mr-2" />
          <h2 className="text-3xl font-play font-bold text-white">
            Challenge #{params.slug} - {title}
          </h2>
        </div>

        <div className="w-full max-w-[64rem] p-4 bg-gray-800 rounded-lg mb-6 font-play">
          <div className="mb-4">
            <h3 className="text-white text-xl font-bold">Statements</h3>
            <ul className="text-white">
              <li>- Knights always tell the truth.</li>
              <li>- Knaves always lie.</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-white">Character A: B is a knave.</p>
            <p className="text-white">Character B: A and I are of opposite types.</p>
          </div>
        </div>

        <hr className="border-0 h-px bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]" />

        {params.slug !== "1" && <Verifier />}
        <hr className="border-0 h-px bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] mb-10" />

        {steps.map((item: any, index: number) => (
          <AccordionItem
            key={index}
            id={`${index}`}
            challengeId={challengeId}
            slug={params.slug}
            title={item.step}
            content={
              <div>
                <p>{item.description}</p>
                <pre>{item.commands.join("\n")}</pre>
                {/* TODO: Adjust the downloadable files */}
                {/* <a href={/challenges/challenge_${item.downloadableFile}/files/download.circom} download>
                  {item.downloadableFile}
                </a> */}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
