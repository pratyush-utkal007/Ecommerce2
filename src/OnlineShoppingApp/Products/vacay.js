import React from "react";
import "./catag.css";
import imgdata from './img.json'


function Vacay() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <button className="btn btn-primary">View All</button>

          <div className="main">
            <div className="card-data">Vacay & Travel Essentials</div>
            {imgdata.map((res)=>{
              var {img9,img10,img11,img12}=res
            return<>
            <img src={img9} alt="" className="img"/>
            <img src={img10} alt=""className="img" />
            <img src={img11} alt=""className="img" />
            <img src={img12} alt=""className="img" />
            </>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Vacay;
