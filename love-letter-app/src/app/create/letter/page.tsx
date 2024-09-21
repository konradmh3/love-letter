'use client';

import CreateLetter from "@/app/ui/createLetter";
import { Suspense } from "react";

export default function Letter() {
    return (
      <Suspense fallback={null}>
        <CreateLetter/>
      </Suspense>
    );
  }
  