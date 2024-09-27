import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
       <div class="logo">Farmárcia</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </div>
  )
}

export default Navbar

