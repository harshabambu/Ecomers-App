import React from 'react'
import {useLocation} from 'react-router-dom'
function UserDashboard() {
   
    let {state}=useLocation()
    return (

    <div>
        <h2>UserDashboard</h2>
        <div className="mt-5">
            <p className="fs-2">{state.username}</p>
            <p className="fs-2">{state.email}</p>
        </div>
    </div>
  )
}

export default UserDashboard