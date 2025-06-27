import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Next-Gen Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Neural Processing",
              description:
                "Advanced AI algorithms that mimic human neural networks",
              icon: "🧠",
            },
            {
              title: "Quantum Computing",
              description:
                "Leverage quantum mechanics for unprecedented computational power",
              icon: "⚛️",
            },
            {
              title: "Adaptive Learning",
              description:
                "Continuous learning and evolution through real-world interactions",
              icon: "🔄",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-pink-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
