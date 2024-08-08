"use client";

import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";

type AccordionItemProps = {
  title: string;
  content: ReactElement;
  id: string;
  challengeId: string;
  slug: string;
};

const AccordionItem = ({ title, content, id, challengeId, slug }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    const starredItems = JSON.parse(localStorage.getItem("starredItems") || "{}");
    const key = `${challengeId}-${slug}-${id}`;
    setIsStarred(starredItems[key] || false);
  }, [id, challengeId, slug]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleStarClick = () => {
    const starredItems = JSON.parse(localStorage.getItem("starredItems") || "{}");
    const key = `${challengeId}-${slug}-${id}`;
    starredItems[key] = !isStarred;
    localStorage.setItem("starredItems", JSON.stringify(starredItems));
    setIsStarred(!isStarred);
  };

  return (
    <div className="my-2 border border-gray-700 rounded-lg">
      <div
        className="p-4 cursor-pointer bg-gray-800 text-white rounded-t-lg flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <Image
            src={isStarred ? "/images/filled_star.png" : "/images/empty_star.png"}
            alt="Star"
            width={16}
            height={16}
            className="mr-2 cursor-pointer"
            onClick={e => {
              e.stopPropagation();
              handleStarClick();
            }}
          />
          {title}
        </div>
        <div>{isOpen ? "▼" : "▶"}</div>
      </div>
      {isOpen && <div className="p-4 bg-gray-900 text-white rounded-b-lg">{content}</div>}
    </div>
  );
};

export default AccordionItem;
