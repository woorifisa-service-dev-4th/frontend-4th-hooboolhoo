import React from "react";

const TigerTail = () => {
  return (
    <>
      <div className="flex">
        <div className="tail-brown-row"></div>
        <div className="tail-yellow-row"></div>
        <div className="tail-brown-row"></div>
        <div className="flex-col">
          <div id="quarter-circle-first" className="tail-circle"></div>
          <div className="tail-brown-col"></div>
          <div className="tail-yellow-col"></div>
          <div className="tail-brown-col"></div>
          <div className="flex">
            <div id="quarter-circle-second" className="tail-circle"></div>
            <div className="tail-brown-row"></div>
            <div className="tail-yellow-row"></div>
            <div className="tail-brown-row"></div>
            <div id="half-circle" className="tail-circle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TigerTail;
