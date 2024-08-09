import fs from "fs/promises";
import path from "path";

export const getSteps = async (slug: string) => {
  const filePath = path.join(process.cwd(), "public", "challenges", `challenge_${slug}/steps.json`);
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return data;
};
