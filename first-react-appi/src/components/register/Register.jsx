import './Register.css'
function Register()
{
 return(
    <div id="regis"className="mx-auto mt-5">
      <h1 className='heading'>Registration form</h1>
    <form action="" className=''>
      <div className='parent'>
       <div className="c1">
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input type="text" {...('firstname',{required:true,minlength:4,maxLength:6})} className="form-control" id="firstname" style={{maxWidth:'250px'}}/>
       </div>
       <div className="c2">
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input type="text" {...('lastname',{required:true,minlength:4,maxLength:6})}className="form-control" id="lastname" style={{maxWidth:'250px'}}/>
       </div>
       <div className="c3">
          <label htmlFor="Birthday" className="form-label">Birthday</label>
          <input type="date" {...('Birthday',{required:true})}className="form-control" id="Birthday" style={{maxWidth:'250px'}}/>
       </div>
       <div className="c4">
          <label htmlFor="Gender" className="form-label">Gender</label>
          <div className='c41'>
          <input type="radio"{...('Birthday',{required:true})} name="male" id="male"/>
          <label htmlFor="male">Male</label>
          </div>
          <div className='c42'>
          <input type="radio"{...('name',{required:true})} name="male" id="female"/>
          <label htmlFor="female">Female</label>
           </div>
       </div>
       <div className="c5">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" {...('email',{required:true})}className="form-control" id="email" style={{maxWidth:'250px'}}/>
       </div>
       <div className="c6">
          <label htmlFor="phonenumber" className="form-label">Phone Number</label>
          <input type="Phone Number"{...('phonenumber',{required:true,minLength:10,maxLength:10})} className="form-control" id="phonenumber" style={{maxWidth:'250px'}}/>
       </div>
       
       <div className="c7">
          <label htmlFor="subject"{...('subject',{required:true})} className="form-label">Subject</label>
          <select name="subject" id="subject" >
             <option value="">Choose Option</option>  
             <option value="maths">Maths</option>  
             <option value="physics">Physics</option>  
             <option value="chemistry">Chemistry</option>  
             <option value="englsih">English</option>  
          </select>  
        </div>
        </div>
        <div>
          <button type='submit' className='btn btn-success'>Register</button>
        </div>
       </form>
   </div>
 )
}
export default Register;