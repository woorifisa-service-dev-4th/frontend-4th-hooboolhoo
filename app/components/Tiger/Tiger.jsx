"use client";

import React from "react";
import TigerFront from "./TigerFront";
import TigerBack from "./TigerBack";
import TigerTail from "./TigerTail";
import { useState } from "react";

const Tiger = ({children}) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      <div
        className="flex h-[200]"
      >
        {isFront ? <TigerFront children = {children} /> : <TigerBack />}
        <div className="h-[200]">
          <div className="h-[45%]"></div>
          <TigerTail onClick={() => {
          if (isFront) {
            setIsFront(false);
          } else {
            setIsFront(true);
          }
        }} />
        </div>
      </div>
    </>
  );
};

export default Tiger;
