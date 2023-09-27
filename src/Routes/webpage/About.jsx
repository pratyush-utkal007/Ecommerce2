import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="text-center">
          <h1 className="text-primary  text-center bg-body-secondary">About Us</h1>
              <img src="https://cdn.pixabay.com/photo/2017/01/19/13/22/ecommerce-1992280_1280.png" alt="" srcset="" height={500}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default About