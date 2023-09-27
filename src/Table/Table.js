import React from 'react'

const Table = () => {
    var data =["ind","pak","Usa","japan","China","Iran"]
  return (
    <>
        <select name="" id="">
            {data.map((val)=>{
                return <option value="">
                    {val}
                </option>
            })}
        </select>
    </>
  )
}

export default Table