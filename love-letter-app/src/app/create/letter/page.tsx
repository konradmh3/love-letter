'use client';
import { useSearchParams } from "next/navigation";

export default function create() {
    const searchParams= useSearchParams();

    const svg = searchParams.get("svg")?.toString();

    return (
      <>
        Click to Open {svg}
      </>
    );
  }
  