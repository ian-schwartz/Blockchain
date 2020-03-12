import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

const Login = () => {
  const [input, setInput] = useState("");
  const context = useContext(AppContext);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.setState({ ...context.state, id: input });
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Your ID</label>
        <input onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
