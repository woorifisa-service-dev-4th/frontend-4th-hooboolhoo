import React from "react";
import { TIGER_TAIL_CSS } from "@/app/constants/TIGER_CSS";

const TigerTail = () => {
  return (
    <>
      <div className="flex">
        <div className={TIGER_TAIL_CSS["tail_yellow_row"]}></div>
        <div className={TIGER_TAIL_CSS["tail_brown_row"]}></div>
        <div className={TIGER_TAIL_CSS["tail_yellow_row"]}></div>
        <div className={TIGER_TAIL_CSS["tail_brown_row"]}></div>
        <div className="flex-col">
          <div
            className={
              TIGER_TAIL_CSS["tail_circle"] +
              " " + "rounded-tr-[2.5rem]"
            }
          ></div>
          <div className={TIGER_TAIL_CSS["tail_brown_col"]}></div>
          <div className={TIGER_TAIL_CSS["tail_yellow_col"]}></div>
          <div className={TIGER_TAIL_CSS["tail_brown_col"]}></div>
          <div className="flex">
            <div
              className={
                TIGER_TAIL_CSS["tail_circle"] +
                " " +"rounded-bl-[2.5rem]"
              }
            ></div>
            <div className={TIGER_TAIL_CSS["tail_brown_row"]}></div>
            <div className={TIGER_TAIL_CSS["tail_yellow_row"]}></div>
            <div className={TIGER_TAIL_CSS["tail_brown_row"]}></div>
            <div
              className={TIGER_TAIL_CSS["tail_circle"] + " " + "rounded-r-full"}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TigerTail;
