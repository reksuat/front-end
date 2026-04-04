import { useState } from "react";
import ListaProduto from "./componentes/ListaProduto.jsx";
import Formulario from "./componentes/Formulario.jsx";
import ListaContatos from "./componentes/ListaContatos.jsx";

import { ContatoProvider } from "./componentes/ContatoContext.jsx";
import "./App.css";

function App() {
  return (
    <ContatoProvider>
      <div className="App">
        <h1 className="title">Cafeteria</h1>
        <ListaProduto />

        <hr style={{ margin: "40px 0" }} />

        <Formulario />
        <ListaContatos />
      </div>
    </ContatoProvider>
  );
}
export default App;
