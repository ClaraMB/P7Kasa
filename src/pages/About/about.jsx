import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse";
import imgBanner from "../../assets/BannerAbout.png";
import '../../styles/about.css';
import about from './../../datas/about.json';

const About = () => {
    return (
    <div className="about">
        <main>
            <Banner texte="" image={imgBanner} />

            <div className="collapse_block">
                {about.map((item) => {
                    return (
                    <div key={item.id}>
                    <Collapse content={item.content} title={item.title} />
                    </div>
                    );
                })}   
            </div>
        </main>
            <Footer />
    </div>
    );
};

export default About;