import { motion } from "framer-motion";
import React, { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);


const Hero: React.FC = () => {
  const span1 = useRef<HTMLSpanElement | null>(null);
  const span2 = useRef<HTMLSpanElement | null>(null);
  const paragraph = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    console.log(span1.current);
    console.log(span2.current);
    gsap.set([span1.current, span2.current], { y: -120 });
    gsap.to(span1.current, {
      duration: 0.8,
      delay: 0.7,
      ease: "power3.out",
      y: 0,
      stagger: {
        amount: 0.15,
      },
    });
    gsap.to(span2.current, {
      duration: 0.8,
      delay: 1.0,
      ease: "power3.out",
      y: 0,
      stagger: {
        amount: 0.15,
      },
    });

    gsap.set(paragraph.current, { opacity: 0, y: 20 });
    gsap.to(paragraph.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 1.3,
      ease: "power3.out",
    });
  }, []);

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  const floatingElementsRender = useMemo(
    () =>
      floatingElements.map(({ id, left, top }) => (
        <motion.div
          key={id}
          className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-500/20"
          style={{ left, top }}
          animate={{
            y: [-40, 40, -40],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1, // Stagger delays per element
          }}
        />
      )),
    [] // Empty deps: render once
  );
  return (
    <section className="select-none relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y:0 }}
        animate={{ opacity: 1}}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
      </motion.div>

      {/* rendering Floating Elements */}
      {floatingElementsRender}

      {/* Hero Content */}
      <motion.div
        className="hero-content relative z-10 text-center max-w-6xl mx-auto px-6"
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-7xl md:text-9xl font-black">
          <span className="overflow-hidden inline-block h-[1.0em]">
            <span
              ref={span1}
              className="inline-block bg-gradient-to-r from-white via-cyan-400 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient"
            >
              FUTURE
            </span>
          </span>
        </h1>
        <h1 className="text-7xl md:text-9xl font-black mb-8">
          <span className="overflow-hidden inline-block h-[1.0em]">
            <span
              ref={span2}
              className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent "
            >
              ROBOTICS
            </span>
          </span>
        </h1>

        <p
          ref={paragraph}
          className="text-xl md:text-3xl font-light mb-12 text-gray-300 tracking-wider"
        >
          Revolutionizing tomorrow with AI-powered robotics that think, learn,
          and evolve
        </p>

        <motion.button
          className="relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-xl font-semibold text-white shadow-2xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(0, 245, 255, 0.4)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="relative z-10"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 20px rgba(0,245,255,0.8)",
                "0 0 10px rgba(255,255,255,0.5)",
              ],
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

export default Hero;