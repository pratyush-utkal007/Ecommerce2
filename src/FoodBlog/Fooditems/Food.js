import React, { useState } from 'react'
import Fooditems from './fooditems'
import "./Food.css"
import Menucart from './menucart'

const Food = () => {
    const [sdata]=useState(Fooditems)
  return (
    <>
    <Menucart Menudata={sdata}/>
    </>
  ) 
}

export default Food