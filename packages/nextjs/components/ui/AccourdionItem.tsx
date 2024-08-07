"use client";

import { ReactElement, useState } from "react";

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
      <div className="p-4 cursor-pointer bg-gray-800 text-white rounded-t-lg" onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && <div className="p-4 bg-gray-900 text-white rounded-b-lg">{content}</div>}
    </div>
  );
};

export default AccordionItem;
