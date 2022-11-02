import React from 'react'

export default function Produto(props) {
    function prioridadeLabel(param, color) {
        switch (param) {
          case '1':
            return 'Baixa';
          case '2':
            return 'Normal';
          case '3':
            return 'Alta';
          default:
            return 'Não definido';
        }
      }
      function prioridadeStyle(param, icone) {
        switch (param) {
          case '1':
            return icone ? 'wink' : 'success';
          case '2':
            return icone ? 'neutral' : 'warning';
          case '3':
            return icone ? 'angry' : ' danger';
          default:
            return 'Não definido';
        }
      }

  return (
    <div  className={"card mb-2 shadow-sm border-" + prioridadeStyle(props.pro.prioridade)} style={{ width: "30rem" }}>
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div className="card-body">
              <div className='d-flex justify-content-between'>

                <h5 className='card-title'><span className="badge rounded-pill text-bg-success">{props.pro.id}</span> - {props.pro.titulo}</h5>
                <h6>Prioridade:
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='ms-1 bi bi-emoji-angry'>
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg> {prioridadeLabel(props.pro.prioridade, true)}</h6>
              </div>
              <p className="card-text">{props.pro.nome} - {props.pro.descricao}</p>
              <div className='d-flex justify-content-end pt-2 border-top'>
                <button className='btn btn-sm btn-outline-primary me-2'
                  onClick={() => props.editarProdutos(props.pro.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-pen me-1" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                  </svg>
                  Editar
                </button>
                <button className='btn btn-sm btn-outline-danger'
                  onClick={() => props.deletarProdutos(props.pro.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-trash me-1" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg>
                  Deletar
                </button>
              </div>
            </div>
    </div>
  )
}
