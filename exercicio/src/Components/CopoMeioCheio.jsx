import { useState } from "react"
import './CopoMeioCheio.css'


function CopoMeioCheio() {
    const [resultado, setResultado] = useState()
    function ProcessarNumero() {

        let numero = Number(prompt("Digite seo número é positivo"))

        if(numero > 0){
            setResultado("Número Positivo")
        }
        else if(numero < 0){
            setResultado("Número Negativo")
        }
        else{
            setResultado("Nulo")
        }
    }
   
    return (
      <div className="CopoMeioCheio-conteiner">
        <h2>Copo meio cheio</h2>
        <button onClick={ProcessarNumero}>Processar</button>
        {resultado}
      </div>
    )
  }
  
  export default CopoMeioCheio