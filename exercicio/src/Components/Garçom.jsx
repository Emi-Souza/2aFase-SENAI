import {useState} from 'react'
import './Garçom.css'

function Garçom() {
    const [resultado, setResultado] = useState()
    function processarValor(){
        let salarioUsuario = Number(prompt("Digite o valor do salário: "))
        let valorEmprestimo = Number(prompt("Digite o valor do emprestimo: "))
        let numeroPrestacoes = Number(prompt("Digite o número de prestacoes: "))

        let valorPrestacao = valorEmprestimo / numeroPrestacoes
        let valorLimitePrestacao = salarioUsuario * 0.30

        if(valorPrestacao <= valorLimitePrestacao){
            setResultado('O empréstimo pode ser feito! ')
        }
        else{
            setResultado('O empréstimo não pode ser efetuado')
        }
        setResultado(inform)
    }
    
  return (
    <div className='Garçom-conteiner'>
      <h2>Linha de Crédito para os funcionários.</h2>
      <button onClick={processarValor}>Processar</button>
      {resultado}
    </div>
  )
}

export default Garçom
