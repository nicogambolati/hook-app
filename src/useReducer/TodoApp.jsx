import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(), // usa la fecha actual para general un id
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3, // por si da la casualidad que sea muy rapido y sea el mismo id
    description: "Recolectar la piedra del poder",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
          {
            todos.map (todo => (
              <li key={todo.id} className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">Item 1</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))
          }
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="¿Que hay que hacer?"
              className="form-control"
            />
            <button className="btn btn-outline-primary mt-1 btn-block">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
