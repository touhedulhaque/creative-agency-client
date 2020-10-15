import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';


const Header = () => {
    return (
        <div className="shared-container mb-5">
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;