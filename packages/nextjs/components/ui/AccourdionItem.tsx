"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";

type AccordionItemProps = {
  title: string;
  content: ReactElement;
};

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-2 border border-gray-700 rounded-lg">
      <div
        className="p-4 cursor-pointer bg-gray-800 text-white rounded-t-lg flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <Image src="/images/empty_star.png" alt="Star" width={16} height={16} className="mr-2" />
          {title}
        </div>
        <div>{isOpen ? "▼" : "▶"}</div>
      </div>
      {isOpen && <div className="p-4 bg-gray-900 text-white rounded-b-lg">{content}</div>}
    </div>
  );
};

export default AccordionItem;
