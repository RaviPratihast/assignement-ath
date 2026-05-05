import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FilterContainer } from "./components/FilterContainer";
import { FeaturedSection } from "./components/FeaturedSection";

function App() {
  return (
    <main className="min-h-screen bg-[#FBF9F1]">
      <Navbar />
      <div className="relative mt-[8px]">
        <HeroSection />
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
          <FilterContainer />
        </div>
      </div>
      <FeaturedSection />
    </main>
  );
}

export default App;
