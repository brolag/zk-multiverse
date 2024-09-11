pragma circom 2.1.6;

template KnightsKnaves() {
    signal input A_is_knight; // 1 if A is a knight, 0 if A is a knave
    signal input B_is_knight; // 1 if B is a knight, 0 if B is a knave

    // Intermediate signals for A's statement
    signal A_statement_part1;
    signal A_statement_part2;

    // A says "B is a knave"
    A_statement_part1 <== A_is_knight * (1 - B_is_knight);
    A_statement_part2 <== (1 - A_is_knight) * B_is_knight;
    signal A_statement_valid;
    A_statement_valid <== A_statement_part1 + A_statement_part2;

    // Intermediate signals for B's statement
    signal B_statement_part1;
    signal B_statement_part2;
    signal B_statement_part1_1;
    signal B_statement_part1_2;
    signal B_statement_part1_3;
    signal B_statement_part2_1;
    signal B_statement_part2_2;
    signal B_statement_part2_3;    

    // If B is a knight (1), then A and B must be of opposite types
    //B_statement_part1 <== B_is_knight * (A_is_knight * (1 - B_is_knight) + (1 - A_is_knight) * B_is_knight);
    B_statement_part1_1 <== A_is_knight * (1 - B_is_knight);
    B_statement_part1_2 <== (1 - A_is_knight) * B_is_knight;
    B_statement_part1_3 <== (B_statement_part1_1 + B_statement_part1_2);
    B_statement_part1 <== B_is_knight * B_statement_part1_3;

    // If B is a knave (0), then A and B must be of the same type
    //B_statement_part2 <== (1 - B_is_knight) * (A_is_knight * B_is_knight + (1 - A_is_knight) * (1 - B_is_knight));
    B_statement_part2_1 <== A_is_knight * B_is_knight;
    B_statement_part2_2 <== (1 - A_is_knight) * (1 - B_is_knight);
    B_statement_part2_3 <== B_statement_part2_1 + B_statement_part2_2;
    B_statement_part2 <== (1 - B_is_knight) * B_statement_part2_3;

    signal B_statement_valid;
    B_statement_valid <== B_statement_part1 + B_statement_part2;

    // Enforce that both statements must be valid
    signal output is_consistent;
    is_consistent <== A_statement_valid * B_statement_valid;

    // Enforce that is_consistent must be 1
    // This makes sure the circuit will only accept valid proofs
    is_consistent * (is_consistent - 1) === 0; // This ensures is_consistent is either 0 or 1
    is_consistent === 1; // This ensures is_consistent is 1

}

component main = KnightsKnaves();