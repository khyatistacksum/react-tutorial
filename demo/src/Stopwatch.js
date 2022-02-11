import { useRef, useState, useEffect } from "react";
function Stopwatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
        console.log(timerIdRef.current, "In IF Condition");
      return;
    } else {
      timerIdRef.current = setInterval(
        () => setCount((count) => count + 1),
        1000
      );
    }
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    console.log("Your time is:", count + "s");
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <br />
      <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
        Timer :- {count}s
      </div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

export default Stopwatch;
