import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Tech() {
  return (
    <div>
        {/* navbar with 3 links */}
        <ul className="nav justify-content-center mt-4 fs-4">
                <li className="nav-item">
                    <Link to="java" className='nav-link'>Java</Link>
                </li>
                <li className='nav-item'>
                    <Link to="node" className='nav-link'>Nodejs</Link>
                </li>
                <li className='nav-item'>
                    <Link to="vue" className='nav-link'>Vue</Link>
                </li>
          </ul>   
          {/* placeholder to display children of tech component */}
          <Outlet/>
    </div>
  )
}

export default Tech