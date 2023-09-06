
const footers = () => {
  return (
    <>
      <footer className="section-p1">
        <div className="col">
            <img className="logo" src="./images/logo.png" alt=""></img>
            <h4>Contact</h4>
            <p><strong>Address:</strong> A-1 KCC Nagar Ajmer Road</p>
            <p><strong>Phone:</strong> (+91) 24536787654</p>
            <p><strong>Hours:</strong> 10.00 - 18.00, Mon - Sat</p>
        <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    </div>

    <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
    </div>

    <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign in</a>
        <a href="#">View Cart</a>
        <a href="#">My Wallet</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
    </div>

    <div className="col install">
        <h4>Install App</h4>
        <p>From App store to Google play</p>
        <div className="row">
            <img src="./images/pay/app.jpg" alt=""></img>
            <img src="./images/pay/play.jpg" alt=""></img>
        </div>
        <p>Secured Payment Gateways</p>
        <img src="./images/pay/pay.png" alt=""></img>
    </div>
        <div className="copyright">
            <p>&copy 2021, Tech2 etc - HTML CSS Ecommerce Template</p>
        </div>
    </footer>
    </>
  )
}

export default footers
