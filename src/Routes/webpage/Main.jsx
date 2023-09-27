import React, { Suspense } from 'react'
import Home from './Home'
// import Product from './Product'
import Help from './Help'
import About from './About'
import { Route, Routes } from 'react-router-dom'
import Notfound from './Notfound'
// import List from '../../OnlineShoppingApp/List'
import Contactus from './Contactus'
import Calldata from './Contact/Calldata'
import Maildata from './Contact/Maildata'
import Textdata from './Contact/Textdata'
import Verifyproduct from './Verifyproduct'
import AddNewProducts from './AddNewProducts'

  const Productlist=React.lazy(()=>import("../../OnlineShoppingApp/List"))
const Main = () => {
  return (
    <>
    <Suspense fallback={<h2>Loading...</h2>}>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/About' element={<About/>} />
        <Route exact path='/Help' element={<Help/>} />
        <Route exact path='/Product' element={<Productlist/>} />
        <Route exact path='/Contactus' element={<Contactus/>} >
             <Route  path='Calldata' element={<Calldata/>}></Route>
             <Route  path='Maildata' element={<Maildata/>}></Route>
             <Route  path='Textdata' element={<Textdata/>}></Route>
        </Route>
        <Route exact path='/AddNewProduct' element={
          <Verifyproduct>
            <AddNewProducts/>
          </Verifyproduct>
        } />
        <Route path='*' element={<Notfound/>} />
        </Routes>
    </Suspense>
    </>
  )
}

export default Main