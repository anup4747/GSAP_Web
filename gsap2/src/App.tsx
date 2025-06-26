import "./App.css";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
// With "verbatimModuleSyntax": true, TypeScript keeps your import exactly as written in the compiled JavaScript. So importing types with normal import may break runtime unless you use import type, which gets erased at compile time
import Home from "./pages/home";
import About from "./pages/about";

interface PageWrapperProps {
  children: ReactNode;
}

function App() {
  const location = useLocation();
  return (
    <>
      <nav className="header" style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={{ marginRight: "10px" }}>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper> } />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

function PageWrapper({children}:PageWrapperProps){
  return(
    <motion.div
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:-20}}
    transition={{duration:0.3}}
    >
      {children}
    </motion.div>
  )
}

export default App;
