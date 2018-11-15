import React from "react";

// Components
import About from "../../components/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutRoute = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutRoute;
