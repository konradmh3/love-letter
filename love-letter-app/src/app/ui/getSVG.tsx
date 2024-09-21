'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function GetSVG() {
    const searchParams= useSearchParams();

    const svg = searchParams.get("svg")?.toString();

    return (
        <>
        Click to Open {svg}
        </>
    );
  }
  