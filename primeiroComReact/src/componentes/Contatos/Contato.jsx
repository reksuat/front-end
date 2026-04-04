function Contato(props) {
  return (
    <div className="cardContato">
      <p>Nome: {props.nome}</p>
      <p>Tel: {props.telefone}</p>
      <button onClick={props.alterarFavorito}>
        {props.favorito ? "Desfavoritar" : "Favoritar"}
      </button>
      <button onClick={props.excluirContato}>Excluir</button>
    </div>
  );
}
export default Contato;
