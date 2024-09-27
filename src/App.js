import React from "react";
import { HashRouter } from "react-router-hash-link";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Footer from "./components/Footer";
import AnimatedCard from "./components/AnimatedCard";

const App = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default App;
