import React from "react";
import './catag.css'
import imgdata from './img.json'


function Kitchen() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <button className="btn btn-primary">View All</button>

          <div className="main">
            <div className="card-data">Home & Kitchen</div>
             {imgdata.map((val)=>{
              var {img5,img6,img7,img8}=val
               return<>
               <img src={img5} alt="" className="img"/>
               <img src={img6} alt="" className="img"/>
               <img src={img7} alt="" className="img"/>
               <img src={img8} alt="" className="img"/>


               </>
             })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Kitchen;
