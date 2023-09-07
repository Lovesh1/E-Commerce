

import {Link} from 'react-router-dom'

const nav = ({links}) => {
  return (
    <>

<section id="header" >
        <Link to="#"><img src="../../images/logo.png" alt="Logo"/></Link>
        <div>
            <ul id="navbar">
                {links.map((link,index) =>(
                  <li key={index}>
                    <Link to={link.to} className={link.active ? 'active':''}>{link.label}</Link>
                  </li>
                  
                ))}
                <li><Link to="#"><i className="fa-regular fa-star"></i></Link></li>
            </ul>
        </div>
    </section>
      
    </>
  )
}

export default nav
