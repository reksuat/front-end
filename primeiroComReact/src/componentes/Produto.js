import React from "react";

function Produto(props) {
  return (
    <div className="cardProduto">
      <img src={props.imagem} alt={props.nome} />
      <h3>{props.nome}</h3>
      <p>Preço: R${props.preco}</p>
    </div>
  );
}
export default Produto;
