import Nav from "../components/nav"

const navlinks = [
    {to: '/', label: 'Home', active:false},
    {to: '/about', label: 'About us', active:true}
]

const AboutPage = () => {
  return (
    <>
      <Nav links = {navlinks}/>
    </>
  )
}

export default AboutPage
