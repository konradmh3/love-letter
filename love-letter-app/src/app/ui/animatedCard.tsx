"use client";
import Image from "next/image";

export default function AnimatedCard(props: { svg: string | undefined }) {

    const handleClick = () => {
      document.getElementById("myCard")?.classList.toggle("flipped");
    }

    return (
        <Image
        onClick={handleClick}
        id="myCard"
        src={`/${props.svg}`}
        alt="Envelope Logo"
        width={116}
        height={77}
      />
    );
    }