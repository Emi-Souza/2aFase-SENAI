import { useState } from 'react'

import './App.css'
import DiaSemana from './Atividades/DiaSemana'

function App() {
  const [semana, setDiaSemana] = useState()
  const [semana, setDiaSemana] = useState(true)

  function setDiaSemana(){
    if(semana == 7){
      setDiaSemana(true)
    }
    else if(semana > 7){
      setDiaSemana(false)
  }
  }
  return (
    <>
     <h1>Atividade</h1>

     <input type="text" 
     value={semana} 
     onChange={ (event) => {setDiaSemana(event.target.value)} }
     />
     <button onClick={ () => {setDiaSemana} }>Semana</button>
      {semana && <DiaSemana />}

    </>
  )
}

export default App
