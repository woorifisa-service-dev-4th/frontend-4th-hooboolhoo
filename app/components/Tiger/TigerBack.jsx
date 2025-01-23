import { TIGER_BODY_CSS } from "@/app/constants/TIGER_CSS";
import React from "react";

const TigerBack = () => {
  const Iterator = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="relative">
      <div className = {TIGER_BODY_CSS.body_frame}></div>
      <div className={TIGER_BODY_CSS.body_back_frame}>
        <div className={TIGER_BODY_CSS.body_line_frame}>
          {Iterator.map((ind) => (
            <div className={TIGER_BODY_CSS.body_line_long + " " + "rounded-b-xl"} key = {ind}></div>
          ))}
        </div>

        <div className={TIGER_BODY_CSS.body_line_frame + " " + "items-end"}>
          {Iterator.map((ind) => (
            <div className={TIGER_BODY_CSS.body_line_long + " " + "rounded-t-xl"} key = {ind}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TigerBack;
