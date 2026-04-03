import React from "react";
import Produto from "./Produto.js";

function ListaProduto() {
  const produtos = [
    {
      id: 1,
      nome: "café gelado",
      preco: 10.0,
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ301UNQCepBzPSSkkmGtbGd0u6rXVPFmEZgQ&s",
    },
    {
      id: 2,
      nome: "café",
      preco: 20.0,
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J_GfY6Rk3MdLgW-8jaQSYRKxqvFkdbpQ9Q&s",
    },
    {
      id: 3,
      nome: "bolo",
      preco: 30.0,
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2FpiPMBtyE5LZv2B-5D11ZrQgik2UopHCA&s",
    },
  ];

  return (
    <div className="listaContainer">
      {produtos.map((item) => (
        <Produto
          key={item.id}
          nome={item.nome}
          preco={item.preco}
          imagem={item.imagem}
        />
      ))}
    </div>
  );
}
export default ListaProduto;
