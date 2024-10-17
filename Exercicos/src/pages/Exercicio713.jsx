import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Exercicio713() {
    const[inputNumero, setInputNumero] = useState('')
    const[resultado, setResultado] = useState('')
    function lerNumero(){
        
    }
function resultado(){
    setResultado(true)
}
  return (
    <div>
        <Navbar />
         <h1>Números pares</h1>
         <input type="text" value={inputNumero}
           onChange={(event) => setInputNumero(event.target.value)}
         />
         <button onClick={lerNumero}>Ler</button>
         <button onClick={resultado}>Reultado</button>
    </div>
  )
}

export default Exercicio713