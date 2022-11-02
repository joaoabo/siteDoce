import { useState, useEffect } from 'react';

const produtoInicial = {
  id: 0,
  titulo: '',
  prioridade: 0,
  descricao: ''
}

export default function ProdutoForm(props) {
  const [produto, setProduto] = useState({produtoAtual});

  useEffect(() => {
    // if (props.prodSelecionado.id !== 0)
    // setProduto(props.prodSelecionado);
  }, [props.prodSelecionado]);

  const inputTextHandler = (e) => {
    const {name, value} = e.target;

    setProduto({...produto, [name]: value})
  }
  
  function produtoAtual() {
    if(props.prodSelecionado.id !== 0) {
      return props.proSelecionado;
    }
    else {
      return produtoInicial();
    }
  }

  return (
    <>
    <form className="row g-3">
        {/* <div className="col-md-4">
          <label className="form-label">Id</label>
          <input name='id' id='id' type="text" placeholder="Id" className="form-control"
          onChange={inputTextHandler}
            value={produto.id}/>
        </div> */}
        <div className="col-md-5">
          <label htmlFor="validationDefault01" className="form-label">Titulo</label>
          <input
            name='titulo'
            value={produto.titulo}
            onChange={inputTextHandler}
            id='titulo' 
            type="text" placeholder="Titulo" 
            className="form-control" 
          />
        </div>
        <div className="col-md-5">
          <label className="form-label">Nome</label>
          <input
            name='nome'
            value={produto.nome}
            onChange={inputTextHandler}
            id='nome' 
            type="text" placeholder="Nome"
            className="form-control" 
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select 
            name='prioridade'
            value={produto.prioridade}
            onChange={inputTextHandler}
            id="prioridade" 
            className="form-select"
          >
            <option defaultValue='0'>Selecionar ...</option>
            <option value='1'>
              Baixa
            </option>
            <option value='2'>
              Normal
            </option>
            <option value='3'>
              Alta
            </option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Descrição</label>
          <textarea
            name='descricao'
            value={produto.descricao}
            onChange={inputTextHandler}
            id='descricao'
            type="text" placeholder="Descrição" 
            className="form-control" 
          />
        </div>

        <div className="col-12">
          <button className="btn btn-success" onClick={props.addProdutos}>+ produto</button>
        </div>
    </form>
    </>
  )
}
