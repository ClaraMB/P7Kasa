import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import imgBanner from "../../assets/Banner.png";
import Gallery from "../../components/Gallery";

function Home() {
  return (
    <div>
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
