import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./useState/CounterApp";
// import { CounterWithCustomHook } from "./useState/CounterWithCustomHook";
// import { SimpleForm } from "./useEffect/SimpleForm";
// import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./examples/MultipleCustomHooks";
// import { FocusScreen } from "./useRef/FocusScreen";
// import { Memorize } from "./memos/Memorize";
// import { MemoHook } from "./memos/MemoHook";
// import { CallbackHook } from "./memos/CallbackHook";
// import { Padre } from "./tarea-memo/Padre";
import { TodoApp } from "./useReducer/TodoApp";

// import './useReducer/intro-reducer.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoApp />
);
