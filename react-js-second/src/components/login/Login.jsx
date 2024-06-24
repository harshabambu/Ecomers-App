import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
function Login()
{
  let {register,handleSubmit,formState:{errors}}=useForm()
  
  let navigate=useNavigate()

  let [userCredErr,setUserCredErr]=useState('')

  async function onUserLogin(userCredentaialsObj){
    let res=await fetch(`http://localhost:3000/users?username=${userCredentaialsObj.username}&password=${userCredentaialsObj.password}`)
    
    let usersArray=await res.json();
    
    if(usersArray.length===0){
      setUserCredErr('Username/password are incorrect')
    } else{
      //navigate to userdashboard component
    navigate('/user-dashboard',{state:usersArray[0]})
    }
  } 
  return(
    <div>
      <h1>Login</h1>  

      {/* //print user login  */}
      {userCredErr.length!==0 && <p className='fs-4 text-danger text-center'>{userCredErr}</p> }
      <form className=' mx-auto mt-5 bg-light p-4' onSubmit={handleSubmit(onUserLogin)}>
         <div className="mb-3">
          <input type="text" className='form-control' {...register('username')} placeholder='username'/>
         </div>
         <div className="mb-3">
          <input type="password" className='form-control' {...register('password')}/>
         </div>
         <div>
           <button type="submit" className='btn btn-success'>Login</button>
         </div>
      </form>
    </div>
  )
}
export default Login;