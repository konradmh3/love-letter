export default function BackgroundSelect(props: {setBgColor: (svg: string) => void, bgColor: string}) {
  // lets map the svg circles to the background colors
  // we can use the same colors as the background colors    
  const handleBackgroundSelect = (color: string) => {
      props.setBgColor(color);      
    }

  const backgroundColors = [
    "rgb(234, 202, 227)",
    "rgb(215, 32, 49)",
    "rgb(211, 237, 242)",
    "rgb(245, 200, 66)",
    "rgb(173, 230, 233)"
  ];

  const circles = backgroundColors.map((color, index) => {
    return (
      <svg
        onClick={() => handleBackgroundSelect(color)}
        key={index}
        className={`background-select-circle${index + 1}`}
        width="40"
        height="40"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="21"
          cy="21"
          r="20"
          fill={color}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    );

  });
  return (
    <div className="back-ground-select">
      {circles}
    </div>
  );
}
