"use client";

import UsableSVGs from "../ui/usablesvgs";
import { useState, useEffect } from "react";
import { postMessage } from "../lib/actions";
import CreationComponent from "../ui/creationcomponent";
import { workSans } from "../ui/fonts";
import BackgroundSelect from "../ui/backgroundselect";

export default function Create() {
  const [selectedSVG, setSelectedSVG] = useState("");
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("rgb(173, 230, 233)");

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background-start-rgb", bgColor);
    root.style.setProperty("--background-end-rgb", bgColor);
  }, [bgColor]);

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleCreateLetter = async () => {
    if (!selectedSVG || !message) {
      alert("Please select both a card and write a message");
      return;
    }
    const id = await postMessage(message);
    window.location.href = `/create/letter?svg=${selectedSVG}&id=${id}&bgcolor=${bgColor}`;
  };

  return (
    <div className={workSans.className}>
      <div className="create-card-page">
        <CreationComponent header={<h1>Choose envelope</h1>}>
          <UsableSVGs
            setSelectedSVG={setSelectedSVG}
            selectedSVG={selectedSVG}
          />
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

        <BackgroundSelect setBgColor={setBgColor} bgColor={bgColor} />
      </div>
    </div>
  );
}
