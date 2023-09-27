import React from 'react'
import pdata from './Pdata.json'

const Products = () => {
  return (
    <>
        <h2>Products Data </h2>
        <table className='table-bordered table table-striped'>
        <thead>
        <tr>
          {Object.keys(pdata[0]).map((val)=>{
            return <th key={val.id}>
              {val}
            </th>
          })}
        </tr>
        </thead>

        <tbody >
                {pdata.map((data)=>{
                   return <>
                      <tr key={data.id}>
                        <td >{data.id}</td>
                       <td>{data.title}</td>
                       <td>{data.price}</td>
                       <td>{data.description}</td>
                       <td>{data.category}</td>
                       <td><img src={data.image} alt="" height={100}  width={200}/></td>
                       <td>{data.rating.rate}</td>
                   </tr>
                   </>
                })}
               </tbody>

        </table>
    </>
  )
}

export default Products