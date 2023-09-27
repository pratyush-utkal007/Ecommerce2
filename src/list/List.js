import React from 'react'

const List = () => {
    var country=["ind","usa","japan","singapore"]
  return (
    <>
       <select name="" id="">
         {country.map((data,ind)=>{
        return <option value="" key={ind}>{data}</option>
      })}
      </select>
    </>
  )
}

export default List