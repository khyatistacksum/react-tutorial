import { useRef} from "react";
import "./style.css";


// the main differences between references and state:-
// Updating a reference doesn't trigger re-rendering, while updating the state makes the component re-render;

function Useref() {
  const countRef = useRef(0);
  //   console.log(countRef);
  //   console.log("typeof countRef:-",typeof countRef);
  //   console.log("countRef.current value = ",countRef.current);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log("rendered from Useref!");
  return (
    <>
      <button onClick={handle}>Useref</button>
      {/* <br /> <br /> */}
    </>
  );
}

export default Useref;

