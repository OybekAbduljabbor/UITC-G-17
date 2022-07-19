import React, { useState } from "react";

export function OnChange() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>{value}</h1>
      <input
        type="text"
        placeholder="Text"
        style={myStyle.input}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setValue(e.target.text.value);
          e.target.text.value = "                                                                           ";
        }}
      >
        <input type="text" style={myStyle.input} name="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const myStyle = {
  input: {
    width: "300px",
    height: "50px",
    border: "1px solid black",
    padding: "0 10px",
    outline: "none",
    borderRadius: "5px",
    fontSize: "18px",
  },
};
