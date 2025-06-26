import { motion } from "framer-motion";

export default function Hero() {
  return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
        
          />
        ))}

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto px-6"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black mb-8 leading-none"

          >
            <span className="bg-gradient-to-r from-white via-cyan-400 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient">
              FUTURE
            </span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ROBOTICS
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl font-light mb-12 text-gray-300 tracking-wider"
          >
            Revolutionizing tomorrow with AI-powered robotics that think, learn, and evolve
          </motion.p>

          <motion.button
            className="relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-xl font-semibold text-white shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0, 245, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(0,245,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Enter the Future
            </motion.span>
           
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-sm text-gray-400 mt-2">Scroll to explore</p>
        </motion.div>
      </section>
  );
}
