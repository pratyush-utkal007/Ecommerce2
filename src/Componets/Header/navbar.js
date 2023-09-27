import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div>
        <div id='container'>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <span>Help</span>
           <input type='text' placeholder='Search'></input> <button>Search</button>
        </div>
    </div>
  )
}

export default Navbar;