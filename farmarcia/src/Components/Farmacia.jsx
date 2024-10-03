import React from 'react';
import './Farmacia.css'

function Farmacia() {
  return (
    <>
    <div className="teste-container">

      <div className='textos'>
        <h1>Bem-vindo à Nossa Nova Casa!</h1>
        <h2>Venha Celebrar Conosco!</h2>
        <p>
          Estamos animados em anunciar a inauguração do nosso novo negócio! <br />
          Prepare-se para um dia repleto de alegria, surpresas e, claro, muitas novidades!
        </p>
      </div>

      <div className='corpo'>
        <img src="./images/cartoes.png" className='img-cartoes' />
        <img src="./images/camisetas.png" className='img-camisetas' />
      </div>
    </div>

    </>
  );
}

export default Farmacia;
