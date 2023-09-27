import React from 'react'
import './slider.css'
function Slider() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval='1000'>
<img src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg" class="d-block w-100" alt="..."/>

    </div>
    <div class="carousel-item" data-bs-interval='1000'>
<img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GWUnrec_BOB/WA3000._CB592962828_.jpg" class="d-block w-100" alt="..."/>

    </div>
    <div class="carousel-item" data-bs-interval='1000'>
<img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/safety/GW/5299---HI---BAU-Safety-Hero-_PC_3000-x-1200-unec._CB590978965_.jpg" class="d-block w-100" alt="..."/>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider