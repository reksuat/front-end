import { useState } from "react";
import ListaProduto from "./componentes/ListaProduto.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Cafeteria</h1>
      <ListaProduto />
    </div>
  );
}
export default App;
