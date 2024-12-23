import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';



const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  let name = "akash@gmail.com";
  let pass = 123456;

  if (name == "akash@gmail.com" && pass == 123456) {

    navigate("/");
  }

  const handleSubmit = async (e) => {

    e.preventDefault();



    try {
      await signInWithEmailAndPassword(auth, email, password)







    }

    catch (error) {

      console.log(error)
    }
  }



  return (
    <>

      <div className='main-cont-Login'>

        <form className='form-cont-login' onSubmit={handleSubmit}>

          <img src="https://st2.depositphotos.com/4264683/6405/v/450/depositphotos_64059685-stock-illustration-security-shield-with-lock.jpg" />
          <h3>Login Now</h3>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Login.....' onChange={(e) => setemail(e.target.value)} />

          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password....' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className='sgn-btn'>
            <button type='submit'>Submit</button>
          </div>
          <div className='validation-signUp'>
            <p>You don't have Account  / <Link to="/sighup"> Sign Up</Link></p>
          </div>
        </form>
      </div>
    </>
  )

}
export default Login;