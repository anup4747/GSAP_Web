import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./compontants/header";
import Footer from "./compontants/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Publisher from "./pages/publisher";
import Advertiser from "./pages/advertiser";
import Contact from "./pages/contact";

gsap.registerPlugin(useGSAP);

function App() {
  useGSAP(() => {
    gsap.to(".box", { rotation: "+=360", duration: 3 });
  }, []);
  return <div className="font-bold underline">Hello world</div>;
}

export default App;
