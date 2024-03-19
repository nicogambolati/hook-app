import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr></hr>

      <input
      ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
      />

      <button className="btn btn-primary mt-3" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
