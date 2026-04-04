import React, { createContext, useState } from "react";
export const ContatoContext = createContext();

export function ContatoProvider(props) {
  const [contatos, setContatos] = useState([]);

  function adicionarContato(nomeUsuario, telefoneUsuario) {
    const novoContato = {
      id: Date.now(),
      nome: nomeUsuario,
      telefone: telefoneUsuario,
      favorito: false,
    };
    setContatos([...contatos, novoContato]);
  }

  function alterarFavorito(idContato) {
    const contatosAtualizados = contatos.map((contato) => {
      if (contato.id === idContato) {
        return { ...contato, favorito: !contato.favorito };
      }
      return contato;
    });
    setContatos(contatosAtualizados);
  }

  function excluirContato(idContato) {
    const contatosAtualizados = contatos.filter(
      (contato) => contato.id !== idContato,
    );
    setContatos(contatosAtualizados);
  }

  return (
    <ContatoContext.Provider
      value={{
        contatos,
        setContatos,
        adicionarContato,
        alterarFavorito,
        excluirContato,
      }}
    >
      {props.children}
    </ContatoContext.Provider>
  );
}
