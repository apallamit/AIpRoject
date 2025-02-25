import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  brand: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, brand }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-black rounded-lg overflow-hidden shadow-lg group border border-gold/20"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-4 right-4 bg-gold text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ShoppingCart className="w-5 h-5" />
        </motion.button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gold/80 mb-1">{brand}</p>
        <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
        <p className="text-gold font-bold">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;