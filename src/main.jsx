
import ReactDOM from 'react-dom/client'
// import App from './pages/App.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ShopPage from  "./pages/ShopPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
<Routes>
  
  <Route path= '/' element={<LandingPage/>} />
  <Route path= '/shop' element= {<ShopPage/>} />
  <Route path= '/contact' element={<ContactPage/>}/>
  <Route path= '/about' element={<AboutPage/>}/>
  <Route path= '/login' element={<Login/>}/>
  <Route path= '/signup' element={<Signup/>}/>
</Routes>
  </Router>,
)
