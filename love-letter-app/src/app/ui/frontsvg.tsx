import React from "react";
import Image from "next/image";

const FrontSVG = (props: { svg: string }) => {
  return (
    <Image
      src={`${props.svg}`}
      alt="Envelope Logo"
      width={3010}
      height={1710}
    />
  );
};

export default FrontSVG;
