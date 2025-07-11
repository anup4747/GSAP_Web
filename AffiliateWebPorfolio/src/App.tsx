import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollingStrip from "./compontants/scrollingStrip";
import Header from "./compontants/header";
import Footer from "./compontants/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Publisher from "./pages/publisher";
import Advertiser from "./pages/advertiser";
import Contact from "./pages/contact";


function App() {
  return (
    <section className="">
      <ScrollingStrip/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/advertiser" element={<Advertiser />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
