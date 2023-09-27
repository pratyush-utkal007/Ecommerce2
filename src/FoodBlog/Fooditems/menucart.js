import React from 'react'


const Menucart = ({Menudata}) => {
  return (
    <>
{Menudata.map((val)=>{
return (
    <div className="card-container">
     <div className="card-body"/>
    <img className="card-img-top" src={val.image} alt="Cardcap"/>
      <h5 className="card-title">{val.category}</h5>
      <p className="card-text">{val.name}</p>
      <p className="card-text"><small className="text-muted">{val.description}</small></p>
    </div>
)
})}

       
    </>
  )
}

export default Menucart