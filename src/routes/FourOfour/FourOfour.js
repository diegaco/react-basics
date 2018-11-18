import React from "react";

// Components
import FourOfourComponent from "../../components/FourOfour";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FourOfour = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <FourOfourComponent />
      </main>
      <Footer />
    </div>
  );
};

export default FourOfour;
