import React from "react";

export default function glassCard() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2">
      <div className="w-[320px]">
        <div
          id="shape1"
          className="h-[175px] w-[175px] absolute bg-[-o-linear-gradient(315deg,_#ff5b84,_#eb3461)] bg-[linear-gradient(135deg,_#ff5b84,_#eb3461)] rounded-[50%] bottom-24 -right-14"
        />
        <div
          id="shape2"
          className="h-[175px] w-[175px] absolute bg-[-o-linear-gradient(315deg,_#426cf8,_#3ebdf0)] bg-[linear-gradient(135deg,_#426cf8,_#3ebdf0)] rounded-[50%] top-24 -left-14"
        />
        <div
          id="card"
          className="h-52 w-full bg-[rgba(255,255,255,0.06)] backdrop-filter backdrop-blur-lg p-24 [box-shadow:0_25px_23px_rgba(0,_0,_0,_0.15)] border-solid  border-[rgba(255,255,255,0.06)] rounded-xl"
        />
      </div>
    </div>
  );
}
