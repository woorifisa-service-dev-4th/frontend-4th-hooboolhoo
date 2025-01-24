"use client";

import { useState } from "react";
import ChoiceCard from "../components/choice/choiceCard";
import Link from "next/link";
import MakerButton from "../components/test-maker-button/makerButton";

export default function Choice() {
  const [cards, setCards] = useState([
    { id: "1", src: "/images/test.jpg", category: "❤️", title: "카리나 vs 윈터", subTitle: "당신의 최애를 골라주세요!" },
    { id: "2", src: "/images/test.jpg", category: "❤️", title: "카리나 vs 윈터", subTitle: "당신의 최애를 골라주세요!" },
    { id: "3", src: "/images/test.jpg", category: "❤️", title: "카리나 vs 윈터", subTitle: "당신의 최애를 골라주세요!" },
  ]);

  return (
    <div className="grid grid-cols-2 gap-10 m-8">
      <MakerButton />
      {cards.map((card, index) => (
        <Link href={`/choice-card/${card.id}`} key={card.id}>
          <ChoiceCard
            id={card.id}
            src={card.src}
            category={card.category}
            title={card.title}
            subTitle={card.subTitle}
            borderColor={index % 2 === 0 ? "border-[#FF0000]" : "border-[#FFCC00]"}
          />
        </Link>
      ))}
    </div>
  );
}
