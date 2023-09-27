import React from 'react'
import Kitchen from './Products/kitchen'
import Catag from './Products/Catag'
import Vacay from './Products/vacay'
import Navbar from '../Routes/webpage/Navbar'

const List = () => {
  return (
    <>
    <Navbar/>
        <Catag/>
        <Vacay/>
        <Kitchen/>
    </>
  )
}
// This file is use in Routes Folder

export default List