import Header from "./componets/Header";
import Cards from "./componets/Cards"; 
import Categories from "./componets/Categories";
import Favorites from "./componets/Favorites";
import Footer from "./componets/Footer";
import HeroSection from "./componets/HeroSection";
import MobileApp from "./componets/MobileApp";
import Campaigns from "./componets/Campaigns";




function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Categories/>
      <Campaigns/>
      <Favorites/>
      <MobileApp/>
      <Cards/>
      <Footer/>

    </>
  );
}

export default App;
