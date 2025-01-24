import React from "react";

/**
 * 
 * @param choice -  "left" 또는 "right"을 값으로 가집니다.
 * @param text - 댓글 내용을 값으로 가집니다. 
 * @returns 
 */
const Comments = ({ choice, text }) => {
  return (
    <>
    <style>

    </style>
    {
    choice === "left" ? 
            <div className="flex items-center justify-start">
        <div className="w-3 overflow-hidden">
          <div className="h-4 bg-[#FFCC00] rotate-45 transform origin-bottom-right rounded-sm"></div>
        </div>
        <div className="border-[#FFCC00] border-4 bg-white p-4 my-6 rounded-lg break-all max-w-[90%]">
        {text}
        </div>
      </div>
        :
            <div className="flex items-center justify-end">
        <div className="border-[#FF3B30] border-4 bg-white p-4 my-6 rounded-lg break-all max-w-[90%]">
            {text}
        </div>
        <div className="w-3 overflow-hidden ">
          <div className="h-4  bg-[#FF3B30] rotate-45 transform origin-top-left rounded-sm"></div>
        </div>
      </div>
    }
    </>
  );
};

export default Comments;
