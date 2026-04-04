import React, { useState, useContext } from "react";
import { ContatoContext } from "./ContatoContext.jsx";
function Formulario() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const { adicionarContato } = useContext(ContatoContext);

  function Envio(event) {
    event.preventDefault();
    adicionarContato(nome, telefone);

    setNome("");
    setTelefone("");
  }
  return (
    <div className="formularioContainer">
      <h2 className="title">Novo Contato</h2>
      <form onSubmit={Envio}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          required
          placeholder="ex: Gabriel"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          required
          placeholder="ex: (42) 99999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Formulario;
