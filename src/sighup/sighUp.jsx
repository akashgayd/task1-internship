import { Link } from 'react-router-dom';
import './sighUp.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
const SighUp =()=>{


  const[email,setemail] = useState('');
  const[password,setPassword] = useState('');

  const navigate = useNavigate(); 


  const handleSubmit= async(e)=>{

    e.preventDefault();


    try {
   await  createUserWithEmailAndPassword( auth, email,password)
      navigate("/login")
    } 
    
    catch (error) {
      
      console.log(error)
    }
  }


    return(


        <>

<div className='main-cont-sighup'>

        <form className='form-cont-sighup' onSubmit={handleSubmit}>
          <img src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png" alt="" />
        <h4>SignUp</h4>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Sign Up.....' onChange={ (e)=>setemail(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password....'  onChange={ (e)=>setPassword(e.target.value)}/>
  </div>

<div className='sgn-btn'>
  <button type='submit'>Sign Up</button>
  </div>
 <div className='validation-signUp'>
  <p>You have already resitred / <Link to="/login"> Login</Link></p>
  </div>
</form>
</div>
</>
    )

}
export default SighUp;