import React from "react";
import "./Login.css";

export function Login({ prop }) {
  return (
    <div id="loginPage">
      <form id="form-loginPage">
        <p>{prop}</p>
        <input type="text" placeholder="Login" style={LoginStyle.input} />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

const LoginStyle = {
  input: {
    color: "#fff",
  },
};
