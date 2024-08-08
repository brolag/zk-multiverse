import Image from "next/image";
import fs from "fs/promises";
import path from "path";
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
  const data = await getSteps(params.slug);
  const challengeId = params.slug;

  return (
    <div className="flex items-center flex-col w-full pt-10">
      <div className="w-full max-w-[64rem] p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center mb-4">
          <Image src="/images/mission.png" alt="Mission" width={40} height={40} className="mr-2" />
          <h2 className="text-3xl font-play font-bold text-white">Challenge #{params.slug} - Circom installation</h2>
        </div>
        {data.map((item: any, index: number) => (
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
                <a href={`/challenges/challenge_${item.downloadableFile}/files/download.circom`} download>
                  {item.downloadableFile}
                </a>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
