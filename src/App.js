import Header from "./componets/Header";
import Cards from "./componets/Cards";
import Categories from "./componets/Categories";
import Favorites from "./componets/Favorites";
import Footer from "./componets/Footer";
import HeroSection from "./componets/HeroSection";
import MobileApp from "./componets/MobileApp";
import Campaigns from "./componets/Campaigns";
import { useWindowWidth } from '@react-hook/window-size';




function App() {
  const windowWith = useWindowWidth()
  return (
    <>
      <Header />
      {windowWith<=768&&<Campaigns />}
      <HeroSection />
      <Categories />
      {windowWith>768&&<Campaigns />}
      <div className="container mx-auto grid gap-y-6">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />

    </>
  );
}

export default App;
