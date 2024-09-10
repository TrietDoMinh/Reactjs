import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import PhuongHoang from '../components/HotSale/components/Toy1'
import Toy2 from '../components/HotSale/components/Toy2'
import Toy3 from '../components/HotSale/components/Toy3';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';
import Toy1 from '../components/HotSale/components/Toy3';

function HomePage(props) {
    const {userInfo} = useSelector(state => state.userSignin)
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <Toy3></Toy3>
            <Toy2></Toy2>
            <Toy1></Toy1>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            {
               userInfo && userInfo.isAdmin === false ? (<AppChat></AppChat>) : ""
            }
        </div>
    );
}

export default HomePage;