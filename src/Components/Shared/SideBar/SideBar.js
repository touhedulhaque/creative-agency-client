import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import {FaCartPlus, FaUserPlus, FaHome} from 'react-icons/fa';
import {FcList} from 'react-icons/fc';
import {TiPlus} from 'react-icons/ti';
import {MdRateReview} from 'react-icons/md';

const SideBar = () => {
    return (
        <nav className=" navbar-expand-lg bg-white ">
            <Link className="navbar-brand ml-3 mt-3"> <img src={logo} width="150px" alt="" /> </Link> 
            
                    <div className="nav-item active m-5 pl-1">
                        <Link  to="/order"><FaCartPlus/> Order</Link>
                    </div> 
                    <div className="nav-item active m-5 pl-1">
                        <Link  to="/serviceList/order"><FcList/> Service List</Link>
                    </div>
                    <div className="nav-item active m-5 pl-1">
                        <Link to="/review/order"><MdRateReview/> Review</Link>
                    </div>
                    <div className="nav-item active m-5 pl-1">
                        <Link  to="/addService/order"><TiPlus/> add service</Link>
                    </div>
                    <div className="nav-item active m-5 pl-1">
                        <Link  to="/addAdmin/order"><FaUserPlus/> Make Admin</Link>
                    </div>
                    <div className="nav-item active m-5 pl-1">
                        <Link  to="/"><FaHome/> HOME</Link>
                    </div>   

        </nav>
    );
};

export default SideBar;