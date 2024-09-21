"use client";

import { useSearchParams } from "next/navigation";
import { getMessage } from "../lib/data";

export default function CreateLetter() {
    const searchParams= useSearchParams();

    const svg = searchParams.get("svg")?.toString();
    const id = searchParams.get("id");

    console.log(svg);
    console.log(id);

    // here we will get the message by id and display it
    // const message = getMessage(Number(id));

    return (
        <>
        Click to Open {svg} with message:
        </>
    );
  }
  