import React from "react";
import "./index.css";
import Portal from "./Portal";
import Useeffect from "./Useeffect";
import Useref from "./Useref";
import Usestate from "./Usestate";
import Stopwatch from "./Stopwatch";
import Component1 from "./Usecontext";
import Reducer from "./Usereducer";

const App = () => {
  return (
    <>
      <Portal />
      {/* useRef Hook */}
      <Useref />

      {/* useState Hook */}
      <Usestate />
      {/* useEffect Hook */}
      <Useeffect />
      <Stopwatch />
      <Component1 />
      <Reducer />
    </>
  );
};
export default App;
