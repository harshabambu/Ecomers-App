import {Link} from 'react-router-dom'
function Header(){
    return(
        <div>
           <ul className="nav justify-content-end  fs-4" style={{background:'rgb(174, 90, 239)'}}>
             <li className='nav-item'>
                    <Link to="" className='nav-link text-white'>Home</Link>
            </li>
            <li className='nav-item'>
                    <Link to="register" className='nav-link text-white'>Register</Link>
            </li>  
          </ul>   
        </div>
    )
}
export default Header;