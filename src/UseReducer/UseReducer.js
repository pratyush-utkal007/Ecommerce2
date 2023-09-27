import React, { useReducer } from "react";
 const UseReducer = () => {
  const initialState = 0;
   const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container text-center">
      <h2>{count}</h2>
      <button onClick={() => dispatch({type: "add"})}>add</button>
      <button onClick={() => dispatch({type: "subtract"})}>subtract</button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>
      </div>
  );
};
 export default UseReducer;