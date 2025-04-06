import "../components/Navbar.css"; // Ensure this path is correct

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">ShopSmart</h1>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#contact">Contact</a>
        <button className="cart-btn" onClick={onCartClick}>
          🛒 Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;