import Nav from "../components/nav"

const navlinks = [
    {to: '/', label: 'Home', active: false},
    {to: '/contact', label: 'Contact', active: true},
    {to: '#', label: 'Query', active: false},
    
];

const Contact = () => {
  return (
    <>
        <Nav links = {navlinks}/>
    </>
  )
}

export default Contact
