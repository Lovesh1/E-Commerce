import {Link} from 'react-router-dom'

const Login = () => {


  return (
    <div className="form">
    <form>
        <div className="container">
            <label>UserName</label>
            <input type="text" placeholder="e.g. Lovesh120"></input>
        </div>
        <div className="container">
            <label>Password</label>
            <input type="password" placeholder="atleast 6 characters"></input>
        </div>
        <div className="button-container">
            <button type="submit">Submit</button>     
        </div>
        <li><Link to='/signup' >Create Account</Link></li>
    </form>

    </div>
  )
}

export default Login
