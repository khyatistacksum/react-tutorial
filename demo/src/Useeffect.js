import { useEffect, useState } from "react";
import "./style.css";

function Useeffect() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  useEffect(() => {
    console.log("Button Clicked");
  }, [num1]);
  const handle = () => {
    setNum(num + 1);
  };
  const handle1 = () => {
    setNum1(num1 + 1);
  };
  return (
    <div>
      <button onClick={handle}>UseEffect - {num}</button>
      <button onClick={handle1}>Useeffect-2 - {num1}</button>
    </div>
  );
}

export default Useeffect;
