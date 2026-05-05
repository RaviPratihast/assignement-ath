import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FilterContainer } from "./components/FilterContainer";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="relative mt-[8px]">
        <HeroSection />
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
          <FilterContainer />
        </div>
      </div>
      <section className="min-h-[70vh] bg-[#F6F4EF] pt-24" />
    </main>
  );
}

export default App;
