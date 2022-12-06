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
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
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
