import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
