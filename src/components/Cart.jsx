import '../components/Cart.css' // Ensure this path is correct

const Cart = ({ items, onRemoveFromCart, onClose, updateQuantity }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0); // Fixed calculation

  return (
    <>
      <div className='cart-overlay' onClick={onClose}></div>
      <div className='cart-sidebar'>
        <button className='close-btn' onClick={onClose}>
          &times;
        </button>
        <h3>Your Cart</h3>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className='cart-items'>
              {items.map((item, index) => (
                <li key={index} className='cart-item'>
                  <img src={item.image} alt={item.title} />
                  <div className='item-info'>
                    <h4>{item.title}</h4>
                    <p>${item.price.toFixed(2)}</p>

                    <div className='quantity-controls'>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className='remove-btn'
                      onClick={() => onRemoveFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className='cart-total'>
              <p>Total: ₹{totalPrice.toFixed(2)}</p> {/* Ensure proper formatting */}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
