import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";

const initialState = [];

// Cuando carga la pagina obtiene los todos del localStorage si existen los recupera de lo contrario devuelve un array vacio
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  // Cada vez que cambia el estado todos lo guardo en el localStorage para no perderlos cuando recargue la pagina
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    // cuando cambia el estado todos lo guardo en el localStorage para no perderlos cuando recargue la pagina
    localStorage.setItem("todos", JSON.stringify(todos || []));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDelete,
    handleToggleTodo,
  };
};
