import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Nicolas",
    email: "nicolas@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect");
  }, []);

  useEffect(() => {
    // console.log("formState");
  }, [formState]);

  useEffect(() => {
    // console.log("email");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        onChange={onInputChange}
        value={username}
      />

        {
          (username === 'Nicolas') && <Message />
        }

      <input
        type="text"
        className="form-control mt-3"
        placeholder="example@gmail.com"
        name="email"
        onChange={onInputChange}
        value={email}
      />
    </>
  );
};
