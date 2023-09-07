
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
  {to: '/contact', label: 'Contact', active: false},
  {to: '/about', label: 'About us', active: false},
  {to: '#', label: 'Blogs', active: false},

];

const FeatureInfo = [
  {imgsrc:"../../images/images/features/f1.png", Text:"Free Shipping"},
  {imgsrc:"../../images/images/features/f2.png", Text:"Free Shipping"},
  {imgsrc:"../../images/images/features/f3.png", Text:"Free Shipping"},
  {imgsrc:"../../images/images/features/f4.png", Text:"Free Shipping"},
  {imgsrc:"../../images/images/features/f5.png", Text:"Free Shipping"},
  {imgsrc:"../../images/images/features/f6.png", Text:"Free Shipping"},
]

const LandingPage = () => {
  return (
    <>
          <Nav links = {navlinks}/>
          <HERO/>
          <FEATURE ImagenText={FeatureInfo}/>
          <PRODUCTS/>
          <BANNER/>
          <Newsletter/>
          <FOOTER/>
    </>
  )
}

export default LandingPage
