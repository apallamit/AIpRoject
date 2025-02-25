import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  {
    label: "New Arrivals",
    link: "#new-arrivals",
    subItems: ["Spring Collection", "Trending Now", "Limited Edition"],
  },
  {
    label: "Clothing",
    link: "#clothing",
    subItems: ["T-Shirts", "Jackets", "Pants", "Hoodies"],
  },
  {
    label: "Shoes",
    link: "#shoes",
    subItems: ["Sneakers", "Boots", "Loafers", "Running Shoes"],
  },
  {
    label: "Accessories",
    link: "#accessories",
    subItems: ["Watches", "Belts", "Sunglasses", "Bags"],
  },
  {
    label: "Luxe",
    link: "#luxe",
    subItems: ["Premium Wear", "Designer Items", "Luxury Watches"],
  },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const prevScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = prevScrollY.current;
    prevScrollY.current = latest;

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0, scale: 1, opacity: 1 },
        hidden: { y: "-100%", scale: 0.95, opacity: 0.8 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed w-full z-50 bg-black/90 text-white backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-gold/80">Hydra Men'sWear</h1>
          </motion.div>

          {/* Desktop Menu with Dropdowns */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.link}
                  className="flex items-center hover:text-cyan-500 transition-colors"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </motion.a>

                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-0 mt-2 w-48 bg-black/80 backdrop-blur-md text-white rounded-lg shadow-lg"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={`${item.link}/${subItem.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-4 py-2 text-sm hover:bg-cyan-500 transition"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Search className="w-6 h-6 cursor-pointer hover:text-cyan-500 transition-colors" />
            <User className="w-6 h-6 cursor-pointer hover:text-cyan-500 transition-colors" />
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-cyan-500 transition-colors" />
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={isOpen ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`md:hidden bg-black/90 overflow-hidden origin-top ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-3 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  className="flex justify-between w-full px-3 py-2 hover:bg-cyan-500 rounded-md transition"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mobile Dropdown Menu */}
                {activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="pl-4 bg-black/80 rounded-b-md"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={`${item.link}/${subItem.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-3 py-1 text-sm hover:bg-cyan-500 transition"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
