'use client';
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Letter() {
    const searchParams= useSearchParams();

    const svg = searchParams.get("svg")?.toString();

    return (
      <Suspense>
        Click to Open {svg}
      </Suspense>
    );
  }
  