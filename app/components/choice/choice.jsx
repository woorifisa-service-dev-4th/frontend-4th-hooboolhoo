"use client";

import { useState } from "react";
import ChoiceCard from "./choiceCard";

export default function Choice({ src, category, title, subTitle }) {
  const [cards, setCards] = useState([
    // { src: "/images/test.jpg", category: "❤️", title: "카리나 vs 윈터", subTitle: "당신의 최애를 골라주세요!" },
  ]);

  return (
    <div className="grid grid-cols-2 gap-10 m-8">
      {cards.map((card, index) => (
        <ChoiceCard
          key={index}
          src={card.src}
          category={card.category}
          title={card.title}
          subTitle={card.subTitle}
          borderColor={
            index % 2 === 0 ? "border-[#FFCC00]" : "border-[#FF0000]"
          }
        />
      ))}
    </div>
  );
}
