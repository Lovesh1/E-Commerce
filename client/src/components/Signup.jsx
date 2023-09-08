import {Link} from 'react-router-dom'
import {useState} from 'react'

const Signup = () => {

let [signUp , setSignUp] = useState({
            fullName :  "" , 
            email : "" ,
            password : ""
})


console.log(signUp)

  return (
    <div className="form">

<form>
        <div className="container">
            <label>FullName</label>
            <input type="text" placeholder="e.g. Lovesh120" onChange={(e)=> setSignUp({ ...signUp,fullName :  e.target.value})}  ></input>
        </div>
        <div className="container">
            <label>Mail</label>
            <input type="email" placeholder="e.g. Lovesh120" onChange={(e)=> setSignUp({...signUp , email : e.target.value})}></input>
        </div>
        <div className="container">
            <label>Password</label>
            <input type="password" placeholder="atleast 6 characters" onChange={(e)=> setSignUp({...signUp,password  : e.target.value })}></input>
        </div>
        <div className="container">
            <label>Confirm Password</label>
            <input type="password" placeholder="atleast 6 characters"></input>
        </div>
        <div className="button-container">
            <button type="submit" >Submit</button>     
        </div>
        <li><Link to='/login' >Login Again</Link></li>
    </form>
      
    </div>
  )
}

export default Signup
