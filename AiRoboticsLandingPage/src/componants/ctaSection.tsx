import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Shape the Future?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join the revolution and be part of the next technological breakthrough
        </motion.p>
        <motion.button
          className="px-16 py-6 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-xl font-bold text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 30px 60px rgba(255, 0, 255, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          Get Started Today
        </motion.button>
      </div>
    </section>
  );
}
