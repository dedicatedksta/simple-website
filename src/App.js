import About from "./components/About";
import Coaches from "./components/coaches/Coaches";
import Disciplines from "./components/Disciplines";
import MainImage from "./components/mainImage/MainImage";
import CardList from "./components/ui/CardList";
import FormLayout from "./components/ui/FormLayout";
import Navbar from "./components/ui/Navbar";

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
    </div>
  );
}

export default App;
