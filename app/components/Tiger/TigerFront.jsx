import React from "react";
import { TIGER_BODY_CSS } from "@/app/constants/TIGER_CSS";

const TigerFront = ({children}) => {
  const Iterator = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="relative">
      <div className={TIGER_BODY_CSS.body_frame}></div>
      <div className={TIGER_BODY_CSS.body_back_frame}>
        <div className={TIGER_BODY_CSS.body_line_frame}>
          {Iterator.map((ind) => (
            <div className={TIGER_BODY_CSS.body_line_short} key = {ind}></div>
          ))}
        </div>

        <div className={TIGER_BODY_CSS.body_line_frame + " " + "items-end"}>
        {Iterator.map((ind) => (
            <div className={TIGER_BODY_CSS.body_line_short} key = {ind}></div>
          ))}
        </div>
      </div>

      <div className = { TIGER_BODY_CSS.body_belly }>
        {children}
      </div>
    </div>
  );
};

export default TigerFront;
