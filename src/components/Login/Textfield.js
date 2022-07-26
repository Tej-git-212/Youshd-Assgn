import React from "react";

function Textfield({ type, placeholder, name, classname }) {
  return (
    <input
      className={classname}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="false"
    />
  );
}

export default Textfield;
