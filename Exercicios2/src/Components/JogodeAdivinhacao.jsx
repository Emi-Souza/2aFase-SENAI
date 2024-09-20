import {useState} from 'react'
import './JogodeAdivinhacao.css'

function JogodeAdivinhacao() {
    
    const [resultado, setResultado] = useState(0)

    function aumentar() {
       setResultado(resultado + 1)
    }
    function diminuir() {
        setResultado(resultado - 1)
    }

    return (
        <div className='JogodeAdivinhacao-conteiner'>
          <button onClick={diminuir}>-</button>
          {resultado}
          <button onClick={aumentar}>+</button>
        </div>
    )
}

export default JogodeAdivinhacao