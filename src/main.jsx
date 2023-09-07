
import ReactDOM from 'react-dom/client'
// import App from './pages/App.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ShopPage from  "./pages/ShopPage.jsx"
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
<Routes>
  
  <Route path= '/' element={<LandingPage/>} />
  <Route path='/shop' element= {<ShopPage/>} />
</Routes>
  </Router>,
)
