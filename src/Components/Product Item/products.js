import "./products.css";
const Products = (props) => {
  const { productsDeatails } = props;
  const { name, imgurl, price } = productsDeatails;
  return (
    <li className="product-card">
      <img src={imgurl} alt={name} className="prodcut-img" />
      <div className="name-order-container">
        <h1 className="products-name">{name}</h1>
        <p className="product-price">RS : ${price}</p>
        <button className="buy-btn">Add to Cart</button>
      </div>
    </li>
  );
};

export default Products;
