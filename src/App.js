
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ProdutoForm from '../src/components/ProdutoForm';
import ProdutoLista from '../src/components/ProdutoLista';

let initialState = [
  {
    id: 1,
    prioridade: '1',
    nome: 'manga',
    titulo: 'Título',
    descricao: 'Primeiro produto',
  },
];

function App() {
  const [produtos, setProdutos] = useState(initialState)
  const [produto, setProduto] = useState()


  function addProdutos(e) {
    e.preventDefault();
    const produto = {
      id: Math.max.apply(Math, produtos.map(item => item.id)) + 1 ,
      prioridade: document.getElementById('prioridade').value,
      nome: document.getElementById('nome').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    }
    
    setProdutos([...produtos, { ...produto }]);
  }
function deletarProdutos(id) {
  const produtosFiltardos = produtos.filter(produto => produto.id !== id);
  setProdutos([ ...produtosFiltardos])
}

function editarProdutos(id) {
  const produto = produtos.filter((produto) => produto.id === id);
  setProduto(produto[0])
}

  return (
    <>
      <ProdutoForm 
      addProdutos={addProdutos}
      produtoSelecionando={produto}
      produtos={produtos}
      />
      <ProdutoLista
      produtos={produtos}
      deletarProdutos={deletarProdutos}
      editarProdutos={editarProdutos}
      />
      
    </>
  );
}

export default App;
