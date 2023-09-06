import PRODUCT1 from './product1';

const product1_img_price = [
  {imgsrc: '../../images/images/products/f8.jpg', price:'890'},
  {imgsrc: '../../images/images/products/f7.jpg', price: '900'},
  {imgsrc: '../../images/images/products/f8.jpg', price: '900'},
  {imgsrc: '../../images/images/products/f7.jpg', price: '900'},
  {imgsrc: '../../images/images/products/f8.jpg', price: '900'},
  {imgsrc: '../../images/images/products/f7.jpg', price: '900'},
  {imgsrc: '../../images/images/products/f8.jpg', price: '900'},
  {imgsrc: '../../images/images/products/f7.jpg', price: '900'},

];

const product2_img_price = [
    {imgsrc: '../../images/images/products/n1.jpg', price:'890'},
    {imgsrc: '../../images/images/products/n2.jpg', price: '900'},
    {imgsrc: '../../images/images/products/n3.jpg', price: '900'},
    {imgsrc: '../../images/images/products/n4.jpg', price: '900'},
    {imgsrc: '../../images/images/products/n5.jpg', price: '900'},
    {imgsrc: '../../images/images/products/n6.jpg', price: '900'},
    {imgsrc: '../../images/images/products/n7.jpg', price: '900'},
    {imgsrc: '../../images/images/products/n8.jpg', price: '900'},
]

const Products = () => {
  return (
    <>
        <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Design</p>
        <div className="pro-container">
   { product1_img_price.map((product,index) => (
        <PRODUCT1 key={index} imgsrc = {product.imgsrc} price = {product.price}></PRODUCT1>
    ))}
    </div>
    </section>

    {/* BANNER IS ALSO INCLUDING BECAUSE I DON'T SEE ANY USE OF BANNER SECTION AGAIN */}

    <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% Off</span>- All t-Shirts & Accessories</h2>
        <button className="normal">Explore More</button>
    </section>


    {/* product2 image (same section as product1 but after the banner section) */}

    <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Design</p>
        <div className="pro-container">

        {product2_img_price.map((product, index) => (
            <PRODUCT1 key={index}imgsrc = {product.imgsrc}  price = {product.price} ></PRODUCT1>
        ))}

        </div>
     </section>

      
    </>
  )
}

export default Products
