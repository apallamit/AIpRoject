import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  brand: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 px-4 bg-black" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
       <motion.h2
  initial={{ opacity: 0, x: -50, scale: 0.8 }}
  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50, scale: inView ? 1 : 0.8 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="text-3xl font-bold mb-8 text-center text-yellow-500"
>
  {title}
</motion.h2>


        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="product-carousel"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
             <motion.div
  whileInView={{
    opacity: 1,
    scale: 1,
    x: index % 2 === 0 ? 0 : 0, // Ensures reset to center
  }}
  initial={{ opacity: 0.5, scale: 0.8, x: index % 2 === 0 ? -50 : 50 }} // Left for even, Right for odd
  exit={{ opacity: 0.5, scale: 0.8, x: index % 2 === 0 ? 50 : -50 }} // Reverse when leaving viewport
  transition={{ duration: 0.6, ease: "easeInOut", delay: Math.min(index * 0.1, 0.5) }}
  whileHover={{ scale: 1.05 }} // Slight zoom on hover
>
  <ProductCard {...product} />
</motion.div>



            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons for Accessibility */}
        <div className="flex justify-center mt-4">
          {/* <button
            className="swiper-button-prev text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Previous slide"
          >
             Prev
          </button>
          <button
            className="swiper-button-next text-white bg-gray-800 px-4 py-2 ml-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Next slide"
          >
            Next
          </button> */}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductSection;
