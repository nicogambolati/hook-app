// import { memo } from "react";
import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("me volvi a renderizar");

  return <small>{value}</small>;
});
