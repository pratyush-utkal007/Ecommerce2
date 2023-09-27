import React from "react";
import './catag.css'
import imgdata from './img.json'
function Catag() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <button className="btn btn-primary ">View All</button>
          <div className="main" id="">
            <div className="card-data">Best of Electronics</div>
               {imgdata.map((resp)=>{
                var {img,img2,img3,img4}=resp
                  return <>
               <img src={img} alt="" className="img"/>
               <img src={img2} alt="" className="img"/>
               <img src={img3} alt="" className="img"/>
               <img src={img4} alt="" className="img"/>
                  </>
               })}
               
          </div>
        </div>
      </div>
    </>
  );
}

export default Catag;
