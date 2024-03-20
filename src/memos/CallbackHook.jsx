import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
        // Le mando un callback en el cual tengo el valor actual del counter y le sumo 1
        setCounter((c) => c + value);
    },
    [],
  );

  // Solo se dispara cuando el la funcion
//   useEffect(() => {
//     incrementFather();
//   }, [incrementFather])


//   const incrementFather = () => {
//     setCounter(counter + 1);
//   };

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
