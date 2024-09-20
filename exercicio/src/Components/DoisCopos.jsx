import { useState } from 'react'
import './DoisCopos.css'

function DoisCopos() {
    const [resultado, setResultado] = useState()
    function ProcessarNumero() {

        let numero = Number(prompt("Digite seo número é positivo"))

        if(numero % 2 == 0 && numero > 0){
            setResultado("Número Positivo e inteiro")
        }
        else{
            setResultado("O valor talvez não seja positivo ou inteiro")
        }
    }

  return (
    <div className="DoisCopos-conteiner">
        <h2>Dois copo meio cheios</h2>
        <button onClick={ProcessarNumero} className= 'Copo'>Processar</button>
        {resultado}
      </div>
  )
}

export default DoisCopos
