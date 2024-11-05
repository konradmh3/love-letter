"use client";

import UsableSVGs from "../ui/usablesvgs";
import { useState, useEffect } from "react";
import { postMessage } from "../lib/actions";
import CreationComponent from "../ui/creationcomponent";
import { workSans } from "../ui/fonts";
import BackgroundSelect from "../ui/backgroundselect";
import BackgroundDropdown from "../ui/backgroundDropdown";

export default function Create() {
  const [selectedSVG, setSelectedSVG] = useState("");
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("rgb(173, 230, 233)");
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const id = await postMessage(message);
    window.location.href = `/create/letter?svg=${selectedSVG}&id=${id}&bgcolor=${bgColor}`;
  };

  return (
    <div className={workSans.className}>
      <div className="create-card-page">

        {/* <BackgroundSelect setBgColor={setBgColor} bgColor={bgColor} /> */}
        <BackgroundDropdown setBgColor={setBgColor} bgColor={bgColor} />

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

          {!isLoading && (
            <div onClick={handleCreateLetter} className="create-button">
              Create
            </div>
          )}
         {isLoading && (
            <svg
              className="spinner"
              width="102px"
              height="49px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                r="25"
                strokeDasharray="117.80972450961724 41.269908169872416"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="0 50 50;360 50 50"
                ></animateTransform>
              </circle>
            </svg>
          )}
          
        </CreationComponent>

      </div>
    </div>
  );
}
