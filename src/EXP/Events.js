import axios from "axios";
import React, { useEffect, useState } from "react";

const Events = () => {
  var [pdata, setpdata] = useState([]);
  async function data() {
    const resp = await axios.get("https://fakestoreapi.com/products");
    setpdata(resp.data)
    console.log(resp.data.map((val)=>val.category))
  }
  useEffect(()=>{
      data()
     
  },[])

  return (
    <>
      {pdata.map((val) => {
        return (
            <div class="card">
              <img class="card-img-top" src={val.image} alt=""  height={200} style={{width:"200px"}}/>
              <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <p class="card-text">{val.category}</p>
              </div>
            </div>
        );
      })}
    </>
  );
};

export default Events;
