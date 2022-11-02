import React from 'react'
import Produto from './Produto';

export default function ProdutoLista(props) {
  return (
    <div className="mt-3">
        {props.produtos.map(pro => (
          <Produto key={pro.id} 
          pro={pro}
          deletarProdutos={props.deletarProdutos}
          editarProdutos={props.editarProdutos}
          />
        ))}
      </div>
  )
}
