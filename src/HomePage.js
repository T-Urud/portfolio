import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="mx-auto px-5 lg:px-12">
      <Header />
      <main>
        <TopSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
