'use client';

import GetSVG from "@/app/ui/getSVG";
import { Suspense } from "react";

export default function Letter() {


    return (
      
      <Suspense fallback={null}>
        <GetSVG/>
      </Suspense>
    );
  }
  