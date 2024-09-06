import { groth16, plonk } from "snarkjs";

export async function generateAndVerifyProof2(a: number, b: number) {
  try {
    const input = {
      A_is_knight: a, // Ensure 'a' is either "Knight" or "Knave"
      B_is_knight: b, // Ensure 'b' is either "Knight" or "Knave"
    };

    const { proof, publicSignals } = await groth16.fullProve(
      input,
      "/challenges/challenge_2/files/Knightsknaves.wasm",
      "/challenges/challenge_2/files/knightsknaves_0001.zkey",
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

export async function generateAndVerifyProof4(a: number, b: number) {
  try {
    const input = {
      A_is_knight: a, // Ensure 'a' is either "Knight" or "Knave"
      B_is_knight: b, // Ensure 'b' is either "Knight" or "Knave"
    };

    const { proof, publicSignals } = await plonk.fullProve(
      input,
      "/challenges/challenge_4/files/Knightsknaves.wasm",
      "/challenges/challenge_4/files/knightsknaves_0000.zkey",
    );

    const vKey = await fetch("/challenges/challenge_4/files/verification_key.json").then(response => response.json());
    const isValid = await plonk.verify(vKey, publicSignals, proof);

    console.log(`Is the proof valid? ${isValid}`);
    return isValid ? 1 : 0;
  } catch (error) {
    console.error("Error generating or verifying proof:", error);
    return 0;
  }
}
