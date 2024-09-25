"use client";

import UsableSVGs from "../ui/usablesvgs";
import { useState, useEffect } from "react";
import { postMessage } from "../lib/actions";
import CreationComponent from "../ui/creationcomponent";

export default function Create() {
  const [selectedSVG, setSelectedSVG] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // console.log(selectedSVG);
    // console.log(message);
  }, [selectedSVG, message]);

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  // here we will define the function that will post the message and the svg to the database using postMessage and return the id of the row then redirect to the letter page with the id in the params
  const handleCreateLetter = async () => {
    if (!selectedSVG || !message) {
      alert("Please select both a card and write a message");
      return;
    }
    const id = await postMessage(message);
    window.location.href = `/create/letter?svg=${selectedSVG}&id=${id}`;
  };

  return (
    <div className="create-card-page">
      <CreationComponent header={<h1>Choose envelope</h1>}>
        <UsableSVGs setSelectedSVG={setSelectedSVG} selectedSVG={selectedSVG} />
      </CreationComponent>
      <CreationComponent header={<h1>Create message</h1>}>
        <textarea
          onChange={handleMessageChange}
          className="message-container"
          placeholder="type message..."
        ></textarea>
        <div onClick={handleCreateLetter} className="create-button">
          Create
        </div>
      </CreationComponent>
    </div>
  );
}
// href={`/create/letter?svg=${selectedSVG}`}
