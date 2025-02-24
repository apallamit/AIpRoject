import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VismeForm from './components/VismeForm';
import CustomCursor from "./components/CustomCursor";
import StarRain from "./components/StarRain";




const newArrivals = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Classic Oxford Shirt",
    price: "$89.99",
    brand: "HydraMen"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Slim Fit Dress Shirt",
    price: "$79.99",
    brand: "HydraMen"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Casual Linen Shirt",
    price: "$69.99",
    brand: "HydraMen"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Printed Summer Shirt",
    price: "$59.99",
    brand: "HydraMen"
  }
];

const formalShirts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Premium Cotton Shirt",
    price: "$129.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "French Cuff Shirt",
    price: "$149.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Herringbone Shirt",
    price: "$139.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Twill Dress Shirt",
    price: "$119.99",
    brand: "HydraMen Luxe"
  }
];

const casualPants = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Slim Fit Chinos",
    price: "$89.99",
    brand: "HydraMen"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Cargo Pants",
    price: "$79.99",
    brand: "HydraMen"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Jogger Pants",
    price: "$69.99",
    brand: "HydraMen"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Khaki Pants",
    price: "$84.99",
    brand: "HydraMen"
  }
];

const formalPants = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Wool Dress Pants",
    price: "$149.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Pleated Trousers",
    price: "$139.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Slim Fit Suit Pants",
    price: "$159.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Pin Stripe Pants",
    price: "$169.99",
    brand: "HydraMen Luxe"
  }
];

const shoes = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Oxford Dress Shoes",
    price: "$249.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Leather Sneakers",
    price: "$179.99",
    brand: "HydraMen"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Derby Shoes",
    price: "$229.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Loafers",
    price: "$199.99",
    brand: "HydraMen"
  }
];

const accessories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Aviator Sunglasses",
    price: "$159.99",
    brand: "HydraMen"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Leather Belt",
    price: "$89.99",
    brand: "HydraMen"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Classic Watch",
    price: "$299.99",
    brand: "HydraMen Luxe"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Silk Tie",
    price: "$79.99",
    brand: "HydraMen"
  }
];

const hats = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Fedora Hat",
    price: "$89.99",
    brand: "HydraMen"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Baseball Cap",
    price: "$39.99",
    brand: "HydraMen"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Beanie",
    price: "$29.99",
    brand: "HydraMen"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Panama Hat",
    price: "$99.99",
    brand: "HydraMen Luxe"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black">
              <CustomCursor />
              <StarRain />
      <Navbar />
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProductSection title="New Arrivals" products={newArrivals} />
        <ProductSection title="Formal Shirts" products={formalShirts} />
        <ProductSection title="Casual Pants" products={casualPants} />
        <ProductSection title="Formal Pants" products={formalPants} />
        <ProductSection title="Shoes Collection" products={shoes} />
        <ProductSection title="Accessories" products={accessories} />
        <ProductSection title="Hats & Caps" products={hats} />
      </motion.div>
      <VismeForm/>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App