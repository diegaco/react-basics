import React from "react";

// Components
import Home from "../../components/Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomeRoute = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default HomeRoute;
