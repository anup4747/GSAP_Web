import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./App.css"
import Hero from './componants/hero';
import CtaSection from './componants/ctaSection';
import Features from './componants/features';
import Header from './componants/header';

interface MousePosition {
  x: number;
  y: number;
}

const AiRoboticsLanding = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener('mousemove', handleMouseMove); 
  }, []);


  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <motion.div
          className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mr-4"
          >
            ⚡
          </motion.span>
          NeuraBots 
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-5 h-5 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <Header/>
      <Hero/>
      <Features/>
      <CtaSection/>

    </div>
  );
};

export default AiRoboticsLanding;