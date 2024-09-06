import React from "react";
// Import the statement for every challenge
import Challenge2Content from "../public/challenges/challenge_2/statement";
import Challenge4Content from "../public/challenges/challenge_4/statement";

type StatementProps = {
  challengeId: string;
};

const NotFoundContent = () => <p>Challenge not found</p>;

const Statement = ({ challengeId }: StatementProps) => {
  let ChallengeContent;

  switch (challengeId) {
    case "2":
      ChallengeContent = Challenge2Content;
      break;
    case "4":
      ChallengeContent = Challenge4Content;
      break;
    default:
      ChallengeContent = NotFoundContent;
  }

  return <ChallengeContent />;
};

export default Statement;
