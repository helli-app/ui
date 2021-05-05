import React from "react";

export const Container = (props) => (
  <div className="px-2 space-y-2 md:container md:mx-auto">
    {props.children}
  </div>
);
