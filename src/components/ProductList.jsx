import React from "react";
import ProductCard from './ProductCard';
import './ProductList.css';

// Import Images
import img1 from '../components/Images/African-violet.jpg.jpg';
import img2 from '../components/Images/Aloe-vera.jpg.jpg';
import img3 from '../components/Images/Amaryllis.jpg.jpg';
import img4 from '../components/Images/Anthurium-andraeanum-2.jpg.jpg';
import img5 from '../components/Images/Syngonium-podophyllum.jpg.jpg';
import img6 from '../components/Images/Asparagus-aethiopicus.jpg.jpg';
import img7 from '../components/Images/Persea-americana.jpg.jpg';
import img8 from '../components/Images/Portulacaria-afra.jpg.jpg';
import img9 from '../components/Images/Asplenium-nidus.jpg.jpg';
import img10 from '../components/Images/Ficus-alii-2.jpg.jpg';
import img11 from '../components/Images/Guzmania-Rana.jpg.jpg';
import img12 from '../components/Images/Sedum-morganianum-2.jpg.jpg';
import img13 from '../components/Images/Excoecaria-cochinchinensis.jpg.jpg';
import img14 from '../components/Images/Aglaonema-purple.jpg.jpg';
import img15 from '../components/Images/Schlumbergera-truncata.jpg.jpg';
import img16 from '../components/Images/Solenostemon-scutellarioides.jpg.jpg';

// Mock product data
const products = [
  {
    id: 1,
    title: 'African Violet',
    price: 299.99,
    image: img1
  },
  {
    id: 2,
    title: 'Aloe',
    price: 149.99,
    image: img2
  },
  {
    id: 3,
    title: 'Amaryllis',
    price: 579.99,
    image: img3
  },
  {
    id: 4,
    title: 'Anthurium',
    price: 229.99,
    image: img4
  },
  {
    id: 5,
    title: 'Arrowhead Vine',
    price: 949.99,
    image: img5
  },
  {
    id: 6,
    title: 'Asparagus Fern',
    price: 489.99,
    image: img6
  },
  {
    id: 7,
    title: 'Avocado Tree',
    price: 639.99,
    image: img7
  },
  {
    id: 8,
    title: 'Baby Jade Plant',
    price: 119.99,
    image: img8
  },
  {
    id: 9,
    title: 'Bird\'s Nest Fern',
    price: 214.99,
    image: img9
  },
  {
    id: 10,
    title: 'Banana Leaf Fig',
    price: 109.99,
    image: img10
  },
  {
    id: 11,
    title: 'Bromeliad',
    price: 524.99,
    image: img11
  },
  {
    id: 12,
    title: 'Burro\'s Tail',
    price: 1034.99,
    image: img12
  },
  {
    id: 13,
    title: 'Chinese Croton',
    price: 919.99,
    image: img13
  },
  {
    id: 14,
    title: 'Chinese Evergreen',
    price: 599.99,
    image: img14
  },
  {
    id: 15,
    title: 'Christmas Cactus',
    price: 429.99,
    image: img15
  },
  {
    id: 16,
    title: 'Coleus',
    price: 1279.99,
    image: img16
  }
];

const ProductList = ({ onAddToCart }) => {
  if (typeof onAddToCart !== 'function') {
    // Provide a fallback to avoid runtime error if onAddToCart is not passed
    console.warn('onAddToCart prop is missing or not a function.');
    return null;
  }
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
