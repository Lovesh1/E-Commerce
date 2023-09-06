

import {Link} from 'react-router-dom'
const nav = () => {
  return (
    <>

<section id="header" >
        <Link to="#"><img src="../../public/images/logo.png" alt="Logo"/></Link>
        <div>
            <ul id="navbar">
                <li><Link className = "active" to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#"><i className="fa-regular fa-star"></i></Link></li>
            </ul>
        </div>
    </section>
      
    </>
  )
}

export default nav
