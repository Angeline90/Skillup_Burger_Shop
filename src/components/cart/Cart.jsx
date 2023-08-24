import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="text" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Cheeseburger", img: burger1, value: 0, price: 200 },
    { id: 2, title: "Cheeseburger Végan", img: burger2, value: 0, price: 300 },
    { id: 3, title: "Cheeseburger avec Frites", img: burger3, value: 0, price: 1800 },
  ]);

  const increment = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, value: item.value + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const decrement = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId && item.value > 0 ? { ...item, value: item.value - 1 } : item
    );
    setCartItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.value * item.price, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.18;
    const deliveryFee = 15;
    return subtotal + tax + deliveryFee;
  };

  return (
    <section className="cart">
      <main>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            img={item.img}
            value={item.value}
            increment={() => increment(item.id)}
            decrement={() => decrement(item.id)}
          />
        ))}
        <article>
          <div>
            <h4>Sous-total</h4>
            <p>{calculateSubtotal()}€</p>
          </div>
          <div>
            <h4>TVA</h4>
            <p>{(calculateSubtotal() * 0.18).toFixed(2)}€</p>
          </div>
          <div>
            <h4>Frais de livraison</h4>
            <p>{15}€</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>{calculateTotal().toFixed(2)}€</p>
          </div>
          <Link to="/shipping">Payer</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
