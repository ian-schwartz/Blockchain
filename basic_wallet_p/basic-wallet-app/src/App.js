import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import AppContext from "./context/AppContext";

function App() {
  const [state, setState] = useState({ id: "" });
  return (
    <div className="App">
      <AppContext.Provider value={{ state, setState }}>
        <header className="App-header">
        {state.id === "" ? <Login /> : <p>Logged in as {state.id}</p>}
        </header>
      </AppContext.Provider>
    </div>
  );
}

export default App;
