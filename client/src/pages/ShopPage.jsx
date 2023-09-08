// import { Link } from "react-router-dom"
import Nav from "../components/nav"

const navlinks = [
  {to: '/', label: 'Home', active: false},
  {to: '/shop', label: 'Shop', active: true},
  {to: '#', label: 'Product', active: false},
  {to: '#', label: 'Manage', active: false},
  {to: '#', label: 'Sell', active: false},

];

const ShopPage = () => {
  return (
    <>
         <Nav links = {navlinks}/>
    </>
  )
}

export default ShopPage
