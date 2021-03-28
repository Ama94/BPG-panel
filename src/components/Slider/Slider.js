import slide1 from './slajd1.png';
import slide2 from './slajd3.png';
import slide3 from './slajd6.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Carousel from 'react-bootstrap/Carousel'

class Slider extends React.Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slider;