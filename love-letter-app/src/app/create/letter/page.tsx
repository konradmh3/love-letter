// 'use client';

import { getMessage } from "@/app/lib/data";
import AnimatedCard from "@/app/ui/animatedCard";
// import { Suspense } from "react";

export default async function Letter({
  searchParams,
}: {
  searchParams?: {
    id?: number;
    svg?: string;
  };
}) {
  const message = await getMessage(searchParams?.id);
  return (
    <div className="letter-container">
      {/* <div  className="message">
      {message.message}</div> */}
      <div className="animated-card">
        <AnimatedCard svg={searchParams?.svg} msg={message.message} />
      </div>
    </div>
  );
}
