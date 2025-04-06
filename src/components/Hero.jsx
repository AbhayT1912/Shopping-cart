import "./Hero.css";
import heroimg from "../components/img.jpg"; // Ensure the path is correct
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Find Your Perfect Product</h1>
        <p>Explore a wide range of high-quality items at unbeatable prices. Shop now and enjoy seamless online shopping!</p>
        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img src={heroimg} alt="Hero Banner" />
      </div>
    </section>
  );
};

export default Hero;
