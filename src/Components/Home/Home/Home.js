import React from 'react';
import Header from '../Header/Header';
import BrandImage from '../BrandImage/BrandImage';
import Services from '../Services/Services';
import Carousel from '../Carousel/Carousel';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Home = () => {
    
    return (
        <div>
            <Header/>
            <BrandImage/>
            <Services/>
            <Carousel/>
            <ClientsFeedback/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;