import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const value = 2;
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(value)}>
        +{value}
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(value)}>
        -{value}
      </button>
    </>
  );
};
