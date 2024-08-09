import { groth16 } from "snarkjs";

export async function generateAndVerifyProof(a: number, b: number) {
  try {
    // Mapping "Knight" and "Knave" to numeric values
    // const roleMap = {
    //   Knight: BigInt(1),
    //   Knave: BigInt(0),
    // } as Record<string, bigint>;

    console.log(a, b);

    const input = {
      A_is_knight: a, // Ensure 'a' is either "Knight" or "Knave"
      B_is_knight: b, // Ensure 'b' is either "Knight" or "Knave"
    };

    const { proof, publicSignals } = await groth16.fullProve(
      input,
      "/challenges/challenge_2/files/Knightsknaves.wasm", // Ensure correct path
      "/challenges/challenge_2/files/knightsknaves_0001.zkey", // Ensure correct path
    );

    const vKey = await fetch("/challenges/challenge_2/files/verification_key.json").then(response => response.json());
    const isValid = await groth16.verify(vKey, publicSignals, proof);

    console.log(`Is the proof valid? ${isValid}`);
    return isValid ? 1 : 0;
  } catch (error) {
    console.error("Error generating or verifying proof:", error);
    return 0;
  }
}
