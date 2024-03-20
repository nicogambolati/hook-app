import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const  heavyStuff = ( iterationNumber = 100 ) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log(' heavy stuff');
  }

  return `heavy stuff ${iterationNumber}`;
}
export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  // Regresa el valor memorizado de la funcion heavyStuff, cada vez que las depenciencias cambien
  const memorizedValue  = useMemo(() =>heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
