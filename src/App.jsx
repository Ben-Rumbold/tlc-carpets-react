import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./effects/ScrollToTop";
import PageLoad from "./components/page-load/PageLoad";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Prices from "./pages/prices/Prices";
import Error from "./pages/error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {<PageLoad />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
