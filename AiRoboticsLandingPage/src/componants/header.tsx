import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.nav
      className="fixed top-0 w-full p-6 backdrop-blur-xl bg-gray-900/80 border-b border-white/10 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          NeuraBots
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {["Home", "Products", "Technology", "About", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                href="#"
                className="relative text-white hover:text-cyan-400 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            )
          )}
        </div>
      </div>
    </motion.nav>
  );
}
