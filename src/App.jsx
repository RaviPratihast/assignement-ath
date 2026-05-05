import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="mt-[8px]">
        <HeroSection />
      </div>
    </main>
  );
}

export default App;
