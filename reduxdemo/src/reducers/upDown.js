const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  console.log(state,action)
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    // return state + 5;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default changeTheNumber;
