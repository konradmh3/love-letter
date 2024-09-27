import React from "react";
import Image from "next/image";

const BackSVG = (props: {
  svg?: string;
  msg?: string;
}) => {
  return (
    <div className="h-fit w-fit relative">
      <Image
        src={`${props.svg}`}
        alt="Envelope Logo"
        width={3010}
        height={1710}
      />
      <div className="card-text">{props.msg}</div>
    </div>
  );
};

export default BackSVG;
