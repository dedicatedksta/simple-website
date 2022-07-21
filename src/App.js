import About from "./components/About";
import Disciplines from "./components/Disciplines";
import MainImage from "./components/mainImage/MainImage";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainImage/>
      <About/>
      <Disciplines/>
    </div>
  );
}

export default App;
