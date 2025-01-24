"use client";

import React from "react";
import TigerFront from "./TigerFront";
import TigerBack from "./TigerBack";
import TigerTail from "./TigerTail";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

const Tiger = () => {
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          if (isFront) {
            setIsFront(false);
          } else {
            setIsFront(true);
          }
        }}
        className="flex h-[200]"
      >
        {isFront ? <TigerFront /> : <TigerBack />}
        <div className="h-[200]">
          <div className="h-[45%]"></div>
          <TigerTail />
        </div>
      </button>
    </>
  );
};

export default Tiger;
