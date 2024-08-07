import fs from "fs/promises";
import path from "path";
import AccordionItem from "~~/components/ui/AccourdionItem";

type PageProps = {
  params: {
    slug: string;
  };
};

const getSteps = async (slug: string) => {
  const filePath = path.join(process.cwd(), "app", "challenges", `challenge_${slug}.json`);
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return data;
};

export default async function Page({ params }: PageProps) {
  const data = await getSteps(params.slug);

  return (
    <div className="flex items-center flex-col w-full pt-10">
      <div className="w-full max-w-[64rem] p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-4">MISSION #1 - Circom installation</h2>
        {data.map((item: any, index: number) => (
          <AccordionItem
            key={index}
            title={item.step}
            content={
              <div>
                <p>{item.description}</p>
                <pre>{item.commands.join("\n")}</pre>
                <a href={`/challenges/${item.downloadableFile}`} download>
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
