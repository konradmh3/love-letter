import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Image from "next/image";

export default function BackgroundDropdown(props: {
  setBgColor: (svg: string) => void;
  bgColor: string;
}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("rgb(173, 230, 233)");

  const handleBackgroundSelect = (color: string) => {
    props.setBgColor(color);
    setIsOpen(false);
    setSelectedOption(color);

  };

  const backgroundColors = [
    "rgb(173, 230, 233)",
    "rgb(255, 189, 46)",
    "rgb(255, 95, 87)",
    "rgb(249, 207, 233)",
    "rgb(154, 81, 213)",
    "rgb(166, 229, 145)",
    "rgb(249, 247, 163)",
    "rgb(202, 202, 202)",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const circles = backgroundColors.map((color, index) => {
    return (
      <Dropdown.Item
        className="dropdownItem"
        key={index}
        onClick={() => handleBackgroundSelect(color)}
        style={{ backgroundColor: color }}
      ></Dropdown.Item>
    );
  });

  return (
    <div className="dropdownContainer">
    <div className="dropdown">

        
        <button onClick={toggleDropdown} className={isOpen ? "dropdownToggle open" : "dropdownToggle"}>
        
        <Image src="/colorPicker.svg" style={{filter: `drop-shadow(0px 0px 2px ${selectedOption})`}} width={18.7} height={21} alt="color picker" className="colorPicker" />

        {"Background color"}

        <Image src={isOpen ? "/upArrow.svg" : "/downArrow.svg"} width={13.98} height={7.99} alt="color picker" className="colorPicker" />

        </button>





      {isOpen && (
        <ul className="dropdownMenu">
          {backgroundColors.map((color, index) => (
            <li
              key={index}
              onClick={() => handleBackgroundSelect(color)}
              className="dropdownItem"
              style={{ backgroundColor: color }}
            >
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}
