import fs from "fs/promises";
import path from "path";

export const getSteps = async (slug: string, lang: string) => {
  const filePath = path.join(process.cwd(), "public", "challenges", `${lang}/challenge_${slug}/steps.json`);
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return data;
};
