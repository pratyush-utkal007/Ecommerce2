import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pagination = () => {
    const navigate= useNavigate()
  return (
    <>
        <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
       <button className='btn btn-primary' onClick={()=>{navigate(-1)}}>Previoues</button>
    </li>
    
    <li class="page-item">
    <button className='btn btn-primary' onClick={()=>{navigate(+1)}}>Next</button>


    </li>
  </ul>
</nav>
    </>
  )
}

export default Pagination