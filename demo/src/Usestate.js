import { useState } from "react";
function Usestate() {
  const [count, setCount] = useState(0);

  const handle = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };
  console.log("rendered from Usestate!");

  return (
    <>
      <button onClick={handle}>Usestate</button>
    </>
  );
}
export default Usestate;
