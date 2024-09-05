import {useState} from "react"
import "./Média.css"

function Média() {
    const [resultado, setResultado] = useState()
    function calcularMédia(){
        let nota1 = Number(prompt("Digite o 1o número: "))
        let nota2 = Number(prompt("Digite o 1o número: "))
        let media = (nota1 + nota2)/2
        setResultado(media)
    }
    return (
      <div className="Média-conteiner">
         <h2>Exercício para caulcular média de 2 números</h2>
         <button onClick={calcularMédia}>Calcular</button>
         <div>
        Média: {resultado}
        </div>
      </div>
    )
  }
  
  export default Média