"use client";

import React, { useEffect, useState } from "react";

type StatementProps = {
  challengeId: string;
  lang: string;
};

const NotFoundContent = () => <p>Challenge not found</p>;

const Statement = ({ challengeId, lang }: StatementProps) => {
  const [ChallengeContent, setChallengeContent] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadChallengeContent = async () => {
      try {
        switch (lang) {
          case "circom":
            switch (challengeId) {
              case "2":
                const { default: Challenge2Content } = await import(
                  "../public/challenges/circom/challenge_2/statement"
                );
                setChallengeContent(() => Challenge2Content);
                break;
              case "3":
                const { default: Challenge3Content } = await import(
                  "../public/challenges/circom/challenge_3/statement"
                );
                setChallengeContent(() => Challenge3Content);
                break;
              case "4":
                const { default: Challenge4Content } = await import(
                  "../public/challenges/circom/challenge_4/statement"
                );
                setChallengeContent(() => Challenge4Content);
                break;
              case "5":
                const { default: Challenge5Content } = await import(
                  "../public/challenges/circom/challenge_5/statement"
                );
                setChallengeContent(() => Challenge5Content);
                break;
              case "6":
                const { default: Challenge6Content } = await import(
                  "../public/challenges/circom/challenge_6/statement"
                );
                setChallengeContent(() => Challenge6Content);
                break;
              case "7":
                const { default: Challenge7Content } = await import(
                  "../public/challenges/circom/challenge_7/statement"
                );
                setChallengeContent(() => Challenge7Content);
                break;
              default:
                setChallengeContent(() => NotFoundContent);
                break;
            }
            break;

          case "noir": // Otro caso para otro lenguaje
            switch (challengeId) {
              default:
                setChallengeContent(() => NotFoundContent);
                break;
            }
            break;

          default:
            setChallengeContent(() => NotFoundContent);
            break;
        }
      } catch (error) {
        console.error("Error loading challenge content", error);
        setChallengeContent(() => NotFoundContent);
      }
    };

    loadChallengeContent();
  }, [challengeId, lang]);

  if (!ChallengeContent) {
    return <div>Loading...</div>;
  }

  return <ChallengeContent />;
};

export default Statement;
