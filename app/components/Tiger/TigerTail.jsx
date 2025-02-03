// import React, { useState, useEffect } from "react";
// import { TIGER_TAIL_CSS } from "@/app/constants/TIGER_CSS";

// const TigerTail = ({ onClick }) => {

//   return (
// <div className="tail-container">
//   <div className="flex" onClick ={onClick}>
//     <div className={TIGER_TAIL_CSS["tail_yellow_row"]}></div>
//     <div className={TIGER_TAIL_CSS["tail_brown_row"]}></div>
//     <div className={TIGER_TAIL_CSS["tail_yellow_row"]}></div>
//     <div className={TIGER_TAIL_CSS["tail_brown_row"]}></div>
//     <div className="flex-col">
//       <div
//         className={
//           TIGER_TAIL_CSS["tail_circle"] +
//           " " + "rounded-tr-[2.5rem]"
//         }
//       ></div>
//       <div className={TIGER_TAIL_CSS["tail_brown_col"]}></div>
//       <div className={TIGER_TAIL_CSS["tail_yellow_col"]}></div>
//       <div className={TIGER_TAIL_CSS["tail_brown_col"]}></div>
//       <div className="flex">
//         <div
//           className={
//             TIGER_TAIL_CSS["tail_circle"] +
//             " " +"rounded-bl-[2.5rem]"
//           }
//         ></div>
//         <div className={TIGER_TAIL_CSS["tail_brown_row"]}></div>
//         <div className={TIGER_TAIL_CSS["tail_yellow_row"]}></div>
//         <div className={TIGER_TAIL_CSS["tail_brown_row"]}></div>
//         <div
//           className={TIGER_TAIL_CSS["tail_circle"] + " " + "rounded-r-full"}
//         ></div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default TigerTail;

import React, { useEffect } from "react";
import { TIGER_TAIL_CSS } from "@/app/constants/TIGER_CSS";

const TigerTail = () => {
  const tails = [];
  const baseTranslate = (1.25 * 112) / Math.PI; // 최대 이동 값

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    for (let i = 0; i < 112; i++) {
      const translateY = -Math.sin((3 / 2 * Math.PI / 112) * i) * baseTranslate; // 요소별 Y값 계산
      const keyframesName = `moveUpDownSmooth_${i}`;

      // 기존 keyframes 제거 (중복 방지)
      Array.from(styleSheet.cssRules).forEach((rule, index) => {
        if (rule.name === keyframesName) {
          styleSheet.deleteRule(index);
        }
      });

      // 새로운 keyframes 생성
      // const keyframes = `
      //   @keyframes ${keyframesName} {
      //     0%, 50%, 100% {
      //       transform: translateY(0); 
      //     }
      //     25% {
      //       transform: translateY(${translateY}px); /* 각 요소에 따라 다르게 설정 */
      //     }
      //     75% {
      //       transform: translateY(${-translateY}px); /* 각 요소에 따라 다르게 설정 */
      //     }
      //   }
      // `;

       const keyframes = `
        @keyframes ${keyframesName} {
          0%, 50%, 100% {
            transform: translateY(${translateY}px); 
          }
          25% {
            transform: translateY(0x); /* 각 요소에 따라 다르게 설정 */
          }
          75% {
            transform: translateY(${-translateY}px); /* 각 요소에 따라 다르게 설정 */
          }
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  for (let i = 0; i < 100; i++) {
    const sec = 0.01 * i;
    const color = parseInt(i / 10) % 2 === 0 ? "bg-[#FFCC00]" : "bg-[#461626]";
    const keyframesName = `moveUpDownSmooth_${i}`; // 요소별 keyframes 이름
    const translateY = i < 99 ? -Math.sin((3 / 2 * Math.PI / 112) * i) * baseTranslate : 10; // 요소별 Y값 계산

    tails.push(
      <div
        key={i}
        className={`${color} animated-element`}
        style={{
          animationName: keyframesName, // 개별 keyframes 적용
          animationDelay: `${sec}s`,
          height: `24px`,
          width: `1.5px`,
        }}
      ></div>
    );

    if (i === 99) {
      for (let j = 0; j < 120; j++) {
        const color = "bg-[#FFCC00]";
        const sec = 1 + parseInt(j / 10) * 0.01;
        const keyframesName = `moveUpDownSmooth_${100 + parseInt(j / 10)}`;

        tails.push(
          <div
            key={100 + j}
            className="bg-[#FFCC00] animated-element"
            style={{
              position: 'absolute',
              top: `${translateY}px`,
              // transform: `translateY(${translateY}px)`,
              animationName: keyframesName,
              animationDelay: `${sec}s`,
              height: `${2 * Math.sqrt(144 - (j + 1) * 0.1 * (j + 1) * 0.1)}px`,
              width: `0.1px`,
            }}
          ></div>
        );
      }
    }
  }

  // tails.push(
  //   <div
  //     key="101"
  //     className={`${TIGER_TAIL_CSS["tail_circle"]} rounded-r-full animated-element`}
  //     style={{
  //       animationName: `moveUpDownSmooth_101`,
  //       animationDelay: "1.01s",
  //       width: "12px",
  //     }}
  //   ></div>
  // );

  return <div className="tail-container">{tails}</div>;
};

export default TigerTail;
