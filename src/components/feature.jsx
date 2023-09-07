
const feature = ({ImagenText}) => {
  return (
    <>
      <section id="feature" className="section-p1">
        
            {ImagenText.map((info,index) => (
                <div className="fe-box" key={index}>
                <img src={info.imgsrc} alt="Free Shipping"></img>
                <h6 >{info.Text}</h6>
                </div>
            ))}  
        
    </section>
    </>
  )
}

export default feature
