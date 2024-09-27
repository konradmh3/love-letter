"use client";
import { useState } from "react";
import FrontSVG from "./frontsvg";
import BackSVG from "./backsvg";
import "@/app/flip.css";

export default function AnimatedCard(props: {
  svg: string | undefined;
  msg: string | undefined;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FrontSVG svg={`/${props.svg}.svg`} />
        </div>
        <div className="flip-card-back">
          <BackSVG svg={`/${props.svg}-back.svg`} msg={props.msg} />
        </div>
      </div>
    </div>
  );
}
