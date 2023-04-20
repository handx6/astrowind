import Hero from "./components/Hero";
import SectionBlog from "./components/SectionBlog";
import SectionComponents from "./components/SectionComponents";
import SectionDream from "./components/SectionDream";
import SectionFaq from "./components/SectionFaq";
import SectionFeature from "./components/SectionFeatures";
import SectionInside from "./components/SectionInside";
import Navbar from "./components/navigation/navigation/Navbar";


function App() {
  return (
    <div className="pt-5">
      <Navbar />
      <main>
        <Hero />
        <SectionFeature />
        <SectionInside />
        <SectionDream />
        <SectionComponents />
        <SectionBlog />
        <SectionFaq />
      </main>
    </div>
  );
}

export default App;
