import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <h3 className="projectintro" id="projects">
        Here are some things i've built
      </h3>

      <Aboutme />

      <Footer />
    </div>
  );
}

export default App;
