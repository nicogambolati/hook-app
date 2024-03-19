import { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    state1: 10,
    state2: 20,
    state3: 30,
  });

  const { state1, state2, state3 } = state;

  return (
    <>
      <h1>useState</h1>
      <hr />
      <h2>Counter: {state1}</h2>
      <h2>Counter: {state2}</h2>
      <h2>Counter: {state3}</h2>

      <button
        className="btn btn-primary"
        onClick={() =>
          setState({
            ...state,
            state1: state1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
