import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Footer from "./components/Footer";
import AnimatedCard from "./components/AnimatedCard";

const App = () => {
  return (
    <div className="mx-auto px-5 lg:px-12">
      <Header />
      <main>
        <TopSection />
        <section id="project">
          <AnimatedCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
