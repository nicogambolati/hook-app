import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HooksApp } from "./HooksApp";
// import { Memorize } from "./memos/Memorize";
import { MemoHook } from "./memos/MemoHook";
// import { CounterApp } from "./useState/CounterApp";
// import { CounterWithCustomHook } from "./useState/CounterWithCustomHook";
// import { SimpleForm } from "./useEffect/SimpleForm";
// import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./examples/MultipleCustomHooks";
// import { FocusScreen } from "./useRef/FocusScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HooksApp />
    {/* <CounterApp />
    <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Memorize /> */}
    <MemoHook/>
  </React.StrictMode>
);
