import React from "react";
import pdata from "./Pdata.json";
import "./Pcard.css";
const Pcard = () => {
  return (
    <>

      {pdata.map((res) => {
       var {image,title,price,category}=res
        return (
          <> 
            <div className="card main">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Price :{price}</p>
                <h6 className="card-text">Category :{category}</h6>
                <a href="abc#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>

          </>
        );
      })}
    </>
  );
};

export default Pcard;
