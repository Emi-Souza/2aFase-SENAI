import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div  className='navbar-container'>
        <img className='img' src="./Images/farmarcia.png" alt="" />
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

