import React from "react";
import Navbar from "./Navbar";
import './Product.css'
import Pagination from "./Pagination";

const Home = () => {
  return (
    <>
<Navbar/>
       {/* products  */}
       <div className="container-fluid">
        <div className="row row-2">
          <div className="col-md-12 d-flex">
              <img
                class="card-img-top"
                src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                 alt=""
              />
              <div class="card-body">
                  <p class="">
                  Grocery
                  </p>
              </div>

              <img
                class="card-img-top"
                src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                 Mobiles
                </p>
              </div>

              <img
                class="card-img-top"
                src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                 Fashion
                </p>
              </div>

              <img
                class="card-img-top"
                src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                 Electronics
                </p>
              </div>

              <img
                class="card-img-top"
                src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                 Home
                </p>
              </div>


              <img
                class="card-img-top"
                src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                 Appliances
                </p>
              </div>

              <img
                class="card-img-top"
                src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                 Top Offers
                </p>
              </div>


              <img
                class="card-img-top"
                src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                  Travel
                </p>
              </div>
          </div>
        </div>
      </div>


        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1000">
              <img
                src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"
                class="d-block w-100"
                alt="..."
                height={300}
              />
            </div>
            <div class="carousel-item" data-bs-interval="1000">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GWUnrec_BOB/WA3000._CB592962828_.jpg"
                class="d-block w-100"
                alt="..."
                height={300}
              />
            </div>
            <div class="carousel-item" data-bs-interval="1000">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/safety/GW/5299---HI---BAU-Safety-Hero-_PC_3000-x-1200-unec._CB590978965_.jpg"
                class="d-block w-100"
                alt="..."
                height={300}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <Pagination/>
      </>
  
  );
};

export default Home;
