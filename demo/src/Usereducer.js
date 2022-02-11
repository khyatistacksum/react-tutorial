import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state,dispatch);
  return (
    <>
      <div>
        <p style={{ marginLeft: "130px" }}>{state}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
      </div>
    </>
  );
};

export default Reducer;
