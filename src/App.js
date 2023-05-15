import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";
import Portfolios from "./components/portfolios/Portfolios";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolios />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
