import Image from "next/image";
import Statement from "~~/components/Statement";
import Verifier from "~~/components/Verifier";
import AccordionItem from "~~/components/ui/AccordionItem";
import { getSteps } from "~~/utils/getStep";

type PageProps = {
  params: {
    slug: string;
  };
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

        {params.slug !== "1" && (
          <>
            <Statement />
            <hr className="border-0 h-px bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]" />
            <Verifier />
            <hr className="border-0 h-px bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] mb-10" />
          </>
        )}

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
