import React from "react";
import ProductCard from './ProductCard';
import './ProductList.css';

// Import Images
import img1 from '../components/Images/download.jpg';
import img2 from '../components/Images/OIP.jpg';
import img3 from '../components/Images/OIPa.jpg';
import img4 from '../components/Images/OIPc.jpg';
import img5 from '../components/Images/OIPb.jpg';
import img6 from '../components/Images/OIPd.jpg';
import img7 from '../components/Images/OIPe.jpg';
import img8 from '../components/Images/R.jpg';
import img9 from '../components/Images/OIPf.jpg';
import img10 from '../components/Images/Ra.jpg';
import img11 from '../components/Images/OIPg.jpg';
import img12 from '../components/Images/OIPh.jpg';
import img13 from '../components/Images/OIPi.jpg';
import img14 from '../components/Images/OIPj.jpg';
import img15 from '../components/Images/OIPk.jpg';
import img16 from '../components/Images/OIPl.jpg';

// Mock product data
const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 1199.99,
    image: img1
  },
  {
    id: 2,
    title: 'Smartwatch',
    price: 1149.99,
    image: img2
  },
  {
    id: 3,
    title: 'Bluetooth Speaker',
    price: 1579.99,
    image: img3
  },
  {
    id: 4,
    title: 'Portable Charger',
    price: 1229.99,
    image: img4
  },
  {
    id: 5,
    title: 'Gaming Mouse',
    price: 1949.99,
    image: img5
  },
  {
    id: 6,
    title: 'Mechanical Keyboard',
    price: 2489.99,
    image: img6
  },
  {
    id: 7,
    title: 'Laptop Stand',
    price: 639.99,
    image: img7
  },
  {
    id: 8,
    title: 'USB-C Hub',
    price: 119.99,
    image: img8
  },
  {
    id: 9,
    title: 'Phone Case',
    price: 214.99,
    image: img9
  },
  {
    id: 10,
    title: 'Screen Protector',
    price: 109.99,
    image: img10
  },
  {
    id: 11,
    title: 'Wireless Charger',
    price: 2524.99,
    image: img11
  },
  {
    id: 12,
    title: 'Smartphone Tripod',
    price: 1034.99,
    image: img12
  },
  {
    id: 13,
    title: 'Action Camera',
    price: 9199.99,
    image: img13
  },
  {
    id: 14,
    title: 'VR Headset',
    price: 5299.99,
    image: img14
  },
  {
    id: 15,
    title: 'Smart Thermostat',
    price: 4129.99,
    image: img15
  },
  {
    id: 16,
    title: 'Wireless Earbuds',
    price: 1279.99,
    image: img16
  }
];

const ProductList = ({ onAddToCart }) => {
  return (
    <section className='product-list'>
      <h2>Featured Products</h2>
      <div className='product-grid'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
