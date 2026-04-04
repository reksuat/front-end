import React, { useContext } from "react";
import { ContatoContext } from "./ContatoContext.jsx";
import Contato from "./Contato.jsx";

function ListaContatos() {
  const { contatos, alterarFavorito, excluirContato } =
    useContext(ContatoContext);
  return (
    <div className="listaContatosContainer">
      <h2 className="title">Lista de Contatos</h2>
      {contatos.length === 0 ? (
        <p>Nenhum contato adicionado.</p>
      ) : (
        contatos.map((contato) => (
          <Contato
            key={contato.id}
            nome={contato.nome}
            telefone={contato.telefone}
            favorito={contato.favorito}
            alterarFavorito={() => alterarFavorito(contato.id)}
            excluirContato={() => excluirContato(contato.id)}
          />
        ))
      )}
    </div>
  );
}
export default ListaContatos;
