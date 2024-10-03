import React from 'react'
import './Navbar.css'
import Logo from './Logo'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='logo'>
      <Logo/>
      </div>
        <ul class="nav-links">
            <button className='button'>Home</button>
            <button className='button'>Sobre</button>
            <button className='button'>Serviços</button>
            <button className='button'>Contato</button>
        </ul>
        
    </div>
  )
}

export default Navbar

