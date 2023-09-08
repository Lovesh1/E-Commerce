
function product1({imgsrc,price}){
  

  console.log()
  return (
    <>
            <div className="pro">
            <img src={imgsrc} alt="Summer Design"></img>
            <div className="des">
                <span>Kaftan</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4>{price} Rs</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
        </div>
    
   
    </>
  )
}

export default product1
