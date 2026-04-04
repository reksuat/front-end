import React, { createContext, useState } from "react";
export const ContatoContext = createContext();

export function ContatoProvider(props) {
  const [contatos, setContatos] = useState(function () {
    const dadosSalvos = localStorage.getItem("listaContatos");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  function adicionarContato(nomeUsuario, telefoneUsuario) {
    const novoContato = {
      id: Date.now(),
      nome: nomeUsuario,
      telefone: telefoneUsuario,
      favorito: false,
    };
    setContatos([...contatos, novoContato]);
    localStorage.setItem("listaContatos", JSON.stringify(novaLista));
  }

  function alterarFavorito(idContato) {
    const contatosAtualizados = contatos.map((contato) => {
      if (contato.id === idContato) {
        return { ...contato, favorito: !contato.favorito };
      }
      return contato;
    });
    setContatos(contatosAtualizados);
    localStorage.setItem("listaContatos", JSON.stringify(novaLista));
  }

  function excluirContato(idContato) {
    const contatosAtualizados = contatos.filter(
      (contato) => contato.id !== idContato,
    );
    setContatos(contatosAtualizados);
    localStorage.setItem("listaContatos", JSON.stringify(novaLista));
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
