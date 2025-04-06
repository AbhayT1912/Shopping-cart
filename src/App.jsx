import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart"; // Ensure this import is correct

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // will hold added items

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item
        )
      );
    }
  };
  

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== indexToRemove));
  };

  const toggleCart = () => {
    console.log("Toggling cart visibility"); // Debug log
    setCartOpen(!cartOpen);
  };

  console.log("Rendering App component"); // Debug log

  return (
    <>
      <Navbar cartCount={cartItems.length} onCartClick={toggleCart} />
      {cartOpen && (
  <Cart
  items={cartItems}
  onRemoveFromCart={handleRemoveFromCart}
  onClose={toggleCart}
  updateQuantity={updateQuantity}
/>

)}

      <Hero />
      <ProductList onAddToCart={handleAddToCart} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
