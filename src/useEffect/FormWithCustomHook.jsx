import { useForm } from "../hooks";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        onChange={onInputChange}
        value={username}
      />

      <input
        type="text"
        className="form-control mt-3"
        placeholder="example@gmail.com"
        name="email"
        onChange={onInputChange}
        value={email}
      />

      <input
        type="password"
        className="form-control mt-3"
        placeholder="contraseña"
        name="password"
        onChange={onInputChange}
        value={password}
      />

      <button className="btn btn-primary mt-3" onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};
