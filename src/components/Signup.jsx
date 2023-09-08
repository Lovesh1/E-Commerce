import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="form">

<form>
        <div className="container">
            <label>FullName</label>
            <input type="text" placeholder="e.g. Lovesh120"></input>
        </div>
        <div className="container">
            <label>Mail</label>
            <input type="email" placeholder="e.g. Lovesh120"></input>
        </div>
        <div className="container">
            <label>Password</label>
            <input type="password" placeholder="atleast 6 characters"></input>
        </div>
        <div className="container">
            <label>Confirm Password</label>
            <input type="password" placeholder="atleast 6 characters"></input>
        </div>
        <div className="button-container">
            <button type="submit">Submit</button>     
        </div>
        <li><Link to='/login' >Login Again</Link></li>
    </form>
      
    </div>
  )
}

export default Signup
