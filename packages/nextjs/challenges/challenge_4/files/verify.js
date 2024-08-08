async function generateAndVerifyProof(a, b) {
    try {
        // Step 1: Create the json for the inputs
        const input = {
            A_is_knight: a,
            B_is_knight: b
        };

        // Step 2: Generate the proof using WASM and PLONK
        const { proof, publicSignals } = await snarkjs.plonk.fullProve(input, "Knightsknaves.wasm", "knightsknaves_0000.zkey");

        // Step 3: Verify the proof
        const vKey = await fetch('verification_key.json').then(response => response.json());
        const isValid = await snarkjs.plonk.verify(vKey, publicSignals, proof);

        console.log(`Is the proof valid? ${isValid}`);
        return isValid ? 1 : 0;

    } catch (error) {
        console.error('Error generating or verifying proof:', error);
        return 0;
    }
}