import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Contactus = () => {
  return (
    <>
    <Navbar/>
      <img
        src="https://www.upliftprofessionals.in/images/background/Contact-Us-page-banner.jpg"
        alt=""
        srcset=""
        className="w-100 "
        height={250}
      />
      <div className="container-fluid text-center">
        <Link to='./Maildata'>
          <span className="bi bi-envelope fs-5 ms-3"> </span>
        </Link>
        <Link to='./Calldata'>
          <span className="bi bi-telephone fs-5 ms-4"></span>
        </Link>
        <Link to='./Textdata'>
          <span className="bi bi-chat-right-text fs-5 ms-4"></span>
        </Link>
      </div>
    <Outlet/>
    </>
  );
};

export default Contactus;
