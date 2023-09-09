import {Link } from 'react-router-dom'
import {useState} from 'react'

const Signup = () => {

let [signUp , setSignUp] = useState({
            fullName :  "" , 
            email : "" ,
            password : ""
})



function sendData(){
        fetch("http://localhost:3000/signup" , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(signUp)
    }).then(x=> x.json()).then((data)=> {
        if(data.error){
        console.log('Error',data.error)
        alert(data.error)
        }
        else {
            const {msg,user} = data;
            alert(user + ' ' + msg)
           window.location.href = "/login"
        }
    })
         
        // console.log( msg[0].fullName);
        // const fullName = name.fullName
        // console.log(name)
        // console.log(msg[0].fullName) 
        // console.log(lovesh)     

        // const {msg, signup,lovesh} = data;
        // console.log('msg is',msg)
        // console.log('array is', signup)
        // console.log('ae',lovesh))
    //  console.log(store)
    // return store
}
function handleSubmit(event) {
    event.preventDefault(); 
    sendData();
  }
  return (
    <div className="form">

        <form onSubmit={handleSubmit}>
        <div className="container">
            <label>FullName</label>
            <input type="text" placeholder="e.g. Lovesh120" onChange={(e)=> setSignUp({ ...signUp,fullName :  e.target.value})}  required/>
        </div>
        <div className="container">
            <label>Mail</label>
            <input type="email" placeholder="e.g. Lovesh120" onChange={(e)=> setSignUp({...signUp , email : e.target.value})} required/>
        </div>
        <div className="container">
            <label>Password</label>
            <input type="password" placeholder="atleast 6 characters" onChange={(e)=> setSignUp({...signUp,password  : e.target.value })} required/>
        </div>
        <div className="container">
            <label>Confirm Password</label>
            <input type="password" placeholder="atleast 6 characters"/>
        </div>
        <div className="button-container">
            <button type="submit">Submit</button>     
        </div>
        <div className='login-link'>
        <li><Link to='/login' >Login Again</Link></li>
        </div>
        </form>
    </div>
  )
}

export default Signup
