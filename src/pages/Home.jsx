import React from 'react';
import Sliders from "../components/home/Sliders.jsx";
import Reviews from "../components/home/Reviews.jsx";
import Newsletter from "../components/home/Newsletter.jsx";

const Home = () => {
    return (
        <div>
            <Sliders/>
            <Reviews/>
            <Newsletter/>
        </div>
    );
};

export default Home;