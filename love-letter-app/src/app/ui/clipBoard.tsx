'use client';    

import React from "react";
import Image from "next/image";

const CopyClipboard = () => {

    const handleClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
    };
  return (
    <Image
      // we cant use onClick because we are using server side rendering so we need to use a tag like so to handle the copy of clipbboard:
        onClick={handleClipboard}
        className="copy-button bot-left"
        src={`/copyClipbboard.svg`}
        alt="copy to clipboard"
        width={57}
        height={57}
      />
  );
};

export default CopyClipboard;
