import {useState} from 'react'
import './Garçom.css'
import Relatorio from './Relatorio'

function Garçom() {
    const [resultado, setSalario] = useState()
    const [stateRelatorio, setStateRelatorio] = useState() 

    function processarValor(){
        let salarioUsuario = Number(prompt("Digite o valor do salário: "))
        let valorEmprestimo = Number(prompt("Digite o valor do emprestimo: "))
        let numeroPrestacoes = Number(prompt("Digite o número de prestacoes: "))

        let valorPrestacao = valorEmprestimo / numeroPrestacoes
        let valorLimitePrestacao = salarioUsuario * 0.30

        if(valorPrestacao <= valorLimitePrestacao){
          setSalario('O empréstimo pode ser feito!')

          let infosRelatorio = {
            situacao: "aprovado",
            maxPrestacao: valorPrestacao,
            prestacao: valorPrestacao,
            emprestimo: valorEmprestimo,
            prestacoes: numeroPrestacoes
        }
        setStateRelatorio(infosRelatorio)
      }
        else{
          setSalario('O empréstimo não pode ser feito')

          let infosRelatorio = {
            situacao: "reprovado",
            maxPrestacao: valorPrestacao,
            prestacao: valorPrestacao,
            emprestimo: valorEmprestimo,
            prestacoes: numeroPrestacoes
        }
        setStateRelatorio(infosRelatorio)
        }
        setSalario(inform)
    }
    
  return (
    <div className='Garçom-conteiner'>
      <h2>Exercício para infomar se o empréstimo pode ser concedido</h2>
      <button onClick={processarValor} className= 'processarValor'>Analiza empréstimo</button>
      {stateRelatorio && 
      <Relatorio infos={ stateRelatorio} />}
      {resultado}
    </div>
  )
}

export default Garçom
