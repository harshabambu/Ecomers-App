import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Register(){
    
    let {register,handleSubmit}=useForm();
    let navigate=useNavigate()
    
   async function handleFormSubmit(userObj){
       // programatically navigate to registered-users and send
 let res=await fetch("http://localhost:3000/users",{method:"POST",
   headers:{"Content-type":"appilication/json"},
 body:JSON.stringify(userObj)
})
if(res.status===201)
  {
    navigate("/login");
  }
    }
   //     navigate('/registered-users',{state:userObj})
   //  }
    return(
        <div>
           <h1 className="text-center text-info display-3">Register</h1>
           <form className="mx-auto mt-5 " onSubmit={handleSubmit(handleFormSubmit)} style={{width:'300px'}}>
              <div className="mb-3">
               <label htmlFor="username" className="form-label">username</label>
               <input type="text" {...register('username')} name="username" id="username" className="form-control" />
             </div>
             <div className="mb-3">
               <label htmlFor="password" className="form-label">password</label>
               <input type="password" {...register('password')} name="password" id="password" className="form-control" />
             </div>
             <div className="mb-3">
               <label htmlFor="password" className="form-label">email</label>
               <input type="text" {...register('email')} name="email" id="email" className="form-control" />
             </div>
             <div className="text-center mt-5">
                <button type="submit" className="btn btn-success">Register</button>
             </div>
           </form>
        </div>
    )
}

export default Register