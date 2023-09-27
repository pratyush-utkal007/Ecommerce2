import React, { useState } from 'react'

const Click = (props) => {
    let [count,setcount]=useState(0);

  return (
    <>
        <button onClick={(()=>{ setcount(count+1)})}>Click me </button>
        <strong>{count}</strong>
    </>
  )
}

export default Click