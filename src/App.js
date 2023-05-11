import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Portfolios from "./components/portfolios/Portfolios";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolios />
    </div>
  );
}

export default App;
