// here we will create an array with all svg names and then map over them to render them in the page
'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

export default function UsableSVGs(props: any) {
    const svgNames = ["envelope.svg", "envelope1.svg"];


    const handleSVGClick = (e: any) => {
        const svgs = document.getElementsByClassName("selected-svg");
        for (let i = 0; i < svgs.length; i++) {
            svgs[i].className = "selectable-svg";
        }
        props.setSelectedSVG(e.target.alt);
        e.target.className = "selected-svg";
        console.log(e.target);
    }

    return (
        <div className="svg-container">
            {svgNames.map((name) => (
                    <Image
                        onClick={handleSVGClick}
                        key={name}
                        className="selectable-svg"
                        src={`/${name}`}
                        alt={`${name}`}
                        width={180}
                        height={37}
                        priority
                    />
            ))}
        </div>
    );
}