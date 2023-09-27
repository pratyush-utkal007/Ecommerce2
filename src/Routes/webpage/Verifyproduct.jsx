import React from 'react'
import { Navigate } from 'react-router-dom'

const Verifyproduct = ({children}) => {
    const role='stu'
    if(role === 'stu'){
        alert("You Are Not Allow")
        return <Navigate to='/home' replace/>
    }   
}

export default Verifyproduct