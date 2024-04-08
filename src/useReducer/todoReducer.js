export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      // retornar todos que no sean el que se quiera borrar
      return initialState.filter((todo) => todo.id !== action.payload);

    default:
      initialState;
  }
};
