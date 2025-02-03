// app/api/data/route.js
export async function GET(request, { params }) {
  const { cardId } = params; 

  const data = {
    1: {
      src: "./images/test.png",
      category: "❤️",
      title: "카리나 vs 윈터",
      subTitle: "당신의 최애를 골라주세요!",
    },
    2: {
      src: "./images/test2.png",
      category: "💛",
      title: "아이린 vs 슬기",
      subTitle: "누가 더 예쁘다고 생각하시나요?",
    },
    3: {
      src: "./images/test3.png",
      category: "💙",
      title: "조이 vs 웬디",
      subTitle: "둘 중에 어느 쪽이 더 매력적일까요?",
    },
  };

  const responseData = data[cardId] || null;

  return new Response(JSON.stringify(responseData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
