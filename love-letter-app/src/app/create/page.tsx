'use client';

import Link from "next/link";
import UsableSVGs from "../ui/usablesvgs";
import { useState, useEffect } from "react";
import { postMessage } from "../lib/actions";

export default function Create() {
  const [selectedSVG, setSelectedSVG] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // console.log(selectedSVG);
    // console.log(message);
}, [selectedSVG, message]);

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  }

  // here we will define the function that will post the message and the svg to the database using postMessage and return the id of the row then redirect to the letter page with the id in the params
  const handleCreateLetter = async () => {
    const id = await postMessage(message);
    window.location.href = `/create/letter?svg=${selectedSVG}&id=${id}`;
  }


  return (
    <div className="create-card-page">
      <div className="create-card-container">
        <div>Choose a Card...</div>
        {/* lets pass in setselected to UsableSVGS */}
        <UsableSVGs setSelectedSVG={setSelectedSVG} selectedSVG={selectedSVG}/>
        <div>Write a Message...</div>
        <textarea onChange={handleMessageChange} className="message-container">
        </textarea>
        <div onClick={handleCreateLetter} className="cursor-pointer">
            Create!
        </div>
      </div>
    </div>
  );
}
// href={`/create/letter?svg=${selectedSVG}`}