// 'use client';

import { getMessage } from "@/app/lib/data";
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
    console.log("message: ", message);
    return (
      <>
      {searchParams?.id}{" "}
      {message.message}
      </>
    );
  }
  