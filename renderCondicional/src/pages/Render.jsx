import React from "react"
import { useState } from "react"
import PainelAdm from "../Componets/PainelAdm"
import UsuárioLogado from "../Componets/UsuárioLogado"
import Login from "../Componets/Login"
import './Render.css'

function Render() {
    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)

  return (
    <div>
      <h1>Renderizações condicionais</h1>

      <div className="render-conteiner">
        <button onClick={ () => {setAdm(false)} }>Sumiu</button>
        <button onClick={ () => {setAdm(true)} }>Apareceu</button>
        { adm && <PainelAdm />}
      </div>

      <div className="render-conteiner">
        <button onClick={() => {setIdade(idade-1)}}>-</button>
        {idade}
        <button onClick={() => {setIdade(idade+1)}}>+</button>
        { idade>=18 && <Produto />}
      </div>

      <div className="render-conteiner">
        <button onClick={() => {setUsuario(true)}}>Logar</button>
        <button onClick={() => {setUsuario(false)}}>10Logar</button>
        { usuario ? <UsuárioLogado /> : <Login />}
      </div>

    </div>
  )
}

export default Render
