import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import img1carousel from "../Assets/img1carousel.jpeg";
import img2carousel from "../Assets/img2carousel.jpg";
import img3carousel from "../Assets/img3carousel.jpeg";
import "./Carouselimg.css";
const Main = () => {
    return(
       
        <Carousel className="carouselimg" >
        <div>
            <img src={img1carousel} height="500px" width="500px" />           
        </div>

        <div>
            <img src={img2carousel} height="500px" width="500px"/>
        </div>

        <div>
            <img src={img3carousel} height="500px" width="500px"/>            
        </div>
    </Carousel>

    

     
    );
}
export default Main;