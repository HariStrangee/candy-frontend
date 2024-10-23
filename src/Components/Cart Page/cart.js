import "./cart.css";

const Cart = (props) => {
  const { cartDeatails, quantity, increaseQuantity, reduceQuantity } = props;
  const { name, price, imgurl, id } = cartDeatails;
  const updateincreaseQuantity = () => {
    increaseQuantity(quantity + 1);
  };
  const updatereduceQuantity = () => {
    if (quantity > 2) {
      reduceQuantity(quantity - 1);
    } else {
      reduceQuantity((quantity = 1));
    }
  };
  return (
    <div className="cart-bg">
      <h1> Cart Items</h1>
      <ol>
        <li>
          <h1>{name}</h1>
          <p>{price * quantity}</p>
          <div className="quantity-container">
            <button onClick={updatereduceQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={updateincreaseQuantity}>+</button>
          </div>
          <img src={imgurl} alt={name} className="cart-item-img" />
        </li>
      </ol>
    </div>
  );
};

export default Cart;
