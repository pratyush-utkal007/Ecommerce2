import React from 'react'
import './navbar.css'

function Nabvar() {
  return (
   <>
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary  ">
  <div className="container-fluid" text-white>
    <a className="navbar-brand ms-4" href="#abc"  >Online Shopping</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-4 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light bi bi-search text-primary " type="submit"></button>
      </form>

      <button type="button" class="btn btn-white bg-white hover:danger">Log In</button>
  
       <div className='div'>Became a Seller</div>
       <div className='more'>More</div>

       <div className='cart bi bi-cart4 ps-4'>  Cart </div>


    </div>
  </div>
</nav>
   </>
  )
}

export default Nabvar
