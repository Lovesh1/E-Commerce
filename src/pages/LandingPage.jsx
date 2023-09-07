
import Nav from '../components/nav'
import HERO from "../components/hero"
import FEATURE from '../components/feature'
import PRODUCTS from '../components/Products'
import BANNER from '../components/Banner'
import Newsletter from "../components/newletter"
import FOOTER from "../components/footers"
import '../assets/App.css'


const navlinks = [
  {to: '/', label: 'Home', active: true},
  {to: '/shop', label: 'Shop', active: false},
  {to: '#', label: 'Contact', active: false},
  {to: '#', label: 'About us', active: false},
  {to: '#', label: 'Blog', active: false},

];

const LandingPage = () => {
  return (
    <>
          <Nav links = {navlinks}/>
          <HERO/>
          <FEATURE/>
          <PRODUCTS/>
          <BANNER/>
          <Newsletter/>
          <FOOTER/>
    </>
  )
}

export default LandingPage
