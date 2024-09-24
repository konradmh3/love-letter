// here we will create an array with all svg names and then map over them to render them in the page
'use client';
import Image from "next/image";
import { useState, useEffect, MouseEvent } from "react";

export default function UsableSVGs( props: {setSelectedSVG: (svg: string) => void, selectedSVG: string} ) {
    const svgNames = ["envelope.svg", "image 1.svg", "image 2.svg", "image 3.svg", "image 4.svg", "image 5.svg", "image 7.svg"];


    const handleSVGClick = (e: MouseEvent<HTMLImageElement>) => {
        props.setSelectedSVG((e.currentTarget).alt);
    }

    return (
        <div className="svg-container">
            {svgNames.map((name) => (
                    <Image
                        onClick={handleSVGClick}
                        key={name}
                        className={props.selectedSVG === name ? "selected-svg" : "selectable-svg"}
                        src={`/${name}`}
                        alt={name}
                        width={180}
                        height={37}
                        priority
                    />
            ))}
        </div>
    );
}