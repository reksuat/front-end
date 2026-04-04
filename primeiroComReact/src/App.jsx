import { useState } from "react";
import ListaProduto from "./componentes/Produtos/ListaProduto.jsx";
import Formulario from "./componentes/Contatos/Formulario.jsx";
import ListaContatos from "./componentes/Contatos/ListaContatos.jsx";

import { ContatoProvider } from "./componentes/Contatos/ContatoContext.jsx";
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
