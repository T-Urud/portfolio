import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Footer from "./components/Footer";
import AnimatedCard from "./components/AnimatedCard";

const HomePage = () => {
  return (
    <div className="mx-auto px-5 lg:px-12">
      <Header />
      <main>
        <TopSection />
        <section
          className="m-2 flex flex-col md:flex-row md:flex-wrap md:justify-between gap-y-4"
          id="project"
        >
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
