import About from "./components/ui/About";
import Coaches from "./components/coaches/Coaches";
import Disciplines from "./components/ui/Disciplines";
import MainImage from "./components/mainImage/MainImage";
import CardList from "./components/ui/CardList";
import FormLayout from "./components/ui/FormLayout";
import Navbar from "./components/ui/Navbar";
import Map from "./components/ui/Map";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainImage/>
      <About/>
      <Disciplines/>
      <CardList/>
      <Coaches/>
      <FormLayout popup={false}/>
      <Map/>
    </div>
  );
}

export default App;
