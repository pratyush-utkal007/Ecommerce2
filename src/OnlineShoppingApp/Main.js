import Nabvar from '../OnlineShoppingApp/Navbar/nabvar'
import Catag from '../OnlineShoppingApp/Products/Catag';
import Product from '../OnlineShoppingApp/Body/product';
import Slider from '../OnlineShoppingApp/Carousel/slider';
import Vacay from '../OnlineShoppingApp/Products/vacay';
import Kitchen from '../OnlineShoppingApp/Products/kitchen';
import Footer from '../OnlineShoppingApp/Footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const Main = () => {
  return (
    <>
     <Nabvar/>
     <Product/>
     <Slider/>
     <Catag/>
     <Vacay/>
     <Kitchen/>
     <Footer/> 
    </>
  )
}

export default Main