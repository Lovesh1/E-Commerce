import {Link} from 'react-router-dom'
import { useState } from 'react'


const Login = () => {

  let [login , setlogin] = useState({
    username : '',
    password : ''
  })

  function handlesubmit(event) {
    event.preventDefault();

     fetch("http://localhost:3000/login", {
      method : 'POST' ,
      headers :{
            'Content-Type' : 'application/json'
      } ,
      body : JSON.stringify(login)
    }).then(x => x.json()).then((data)=>{
      if(data.error)
      alert(data.error)

      else{
        const {user} = data;
        // console.log(password)
        alert('Welcome'+' '+ user)
        window.location.href = "/";
      }
    })

}
  

  return (
    
    <div className="form">
    <form onSubmit={handlesubmit}>
<div className='login'>
        <div className="container">
            <label>UserName</label>
            <input type="text" placeholder="e.g. Lovesh120" onChange={(e) => setlogin({...login, username: e.target.value})}  required/>
        </div>
        <div className="container">
            <label>Password</label>
            <input type="password" placeholder="atleast 6 characters" onChange={(e) => setlogin({...login, password: e.target.value})}  required/>
        </div>
        <div className="button-container">
            <button type="submit">Submit</button>     
        </div>
        <div className='login-link'>
        <li><Link to='/signup' >Create Account</Link></li>
        </div>

    </div>
    </form>
    </div>
  )
}

export default Login
