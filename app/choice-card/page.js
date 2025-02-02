"use client";

import { useState } from "react";
import ChoiceCard from "../components/choice/choiceCard";
import Link from "next/link";
import MakerButton from "../components/test-maker-button/makerButton";

export default function Choice() {
  const [cards, setCards] = useState([
    { id: "1", src: "/images/test1.jpg", category: "❤️", title: "카리나 vs 윈터", subTitle: "당신의 최애를 골라주세요!" },
    { id: "2", src: "/images/test2.jpg", category: "🚗", title: "카공하기 vs 집공하기", subTitle: "당신의 최애를 골라주세요!" },
    { id: "3", src: "/images/test3.jpg", category: "🐶", title: "강아지 vs 고양이", subTitle: "당신의 최애를 골라주세요!" },
    { id: "4", src: "/images/test4.jpg", category: "🎬", title: "드라마 vs 예능", subTitle: "당신의 최애를 골라주세요!" },
    { id: "5", src: "/images/test5.jpg", category: "🍜", title: "짜장 vs 짬뽕", subTitle: "당신의 최애를 골라주세요!" },
  ]);

  return (
    <div className="grid grid-cols-2 gap-10 m-8">
      <MakerButton />
      {cards.map((card, index) => (
        <Link
          key={card.id}
          href={{
            pathname: `/choice-card/${card.id}`,
            query: { src: card.src, title: card.title }, 
          }}
        >
          <ChoiceCard  id={card.id}
            src={card.src}
            category={card.category}
            title={card.title}
            subTitle={card.subTitle}
            borderColor={index % 2 === 0 ? "border-[#FF0000]" : "border-[#FFCC00]"} />
        </Link>
      ))}
    </div>
  );
}
