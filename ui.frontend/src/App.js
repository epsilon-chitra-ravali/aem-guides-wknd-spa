import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeCarousel from "./components/carousal/index";
import GridCarousel from "./components/gridCarousel/index";
import CarousalDescription from "./components/carousalDescription/index";
import ExploreGrid from "./components/exploreGrid/index";
function App() {
  return (
    <>
      <Header />
      <div className="homeBody">
        <HomeCarousel />
        <CarousalDescription />
        <GridCarousel />
        <ExploreGrid />
      </div>
      <Footer />
    </>
  );
}

export default App;
