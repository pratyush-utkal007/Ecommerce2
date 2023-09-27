import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
         <nav class="navbar navbar-expand-lg bg-primary ">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#123">
            Online shopping ...
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#123navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link to="/Home" class="nav-link active text-light" aria-current="page" >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/About"class="nav-link active text-light" aria-current="page" href="#123">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Help"class="nav-link active text-light" aria-current="page" href="#123">
                  Help
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/product"class="nav-link active text-light" aria-current="page" href="#123">
                Product
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Contactus"class="nav-link active text-light" aria-current="page" href="#123">
                Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/AddNewProduct"class="nav-link active text-light" aria-current="page" href="#123">
                AddProduct
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search"> 
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar