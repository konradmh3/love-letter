'use client';

import Link from "next/link";
import UsableSVGs from "../ui/usablesvgs";
import { useState, useEffect } from "react";

export default function Create() {
  const [selectedSVG, setSelectedSVG] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(selectedSVG);
    console.log(message);
}, [selectedSVG, message]);

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  }

  return (
    <div className="create-card-page">
      <div className="create-card-container">
        <div>Choose a Card...</div>
        {/* lets pass in setselected to UsableSVGS */}
        <UsableSVGs setSelectedSVG={setSelectedSVG} />
        <div>Write a Message...</div>
        <textarea onChange={handleMessageChange} className="message-container">
        </textarea>
        <Link href={`/create/letter`} className="">
            Create!
        </Link>
      </div>
    </div>
  );
}
