import slide1 from './slajd1.png';
import slide2 from './slajd3.png';
import slide3 from './slajd6.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Slajd from "./Slajd.js"

// class Slider extends React.Component{
//     render() {
//         return (
//             <Carousel>
//                 <Carousel.Item>
//                    <Slajd image={slide1} title="Skaning 3D" description={"Test1"}></Slajd>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <Slajd image={slide2} title="Herobrine" description={"Test2"}></Slajd>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <Slajd image={slide3} title="Cobel" description={"Test3"}></Slajd>
//                 </Carousel.Item>
//             </Carousel>
//         )
//     }
// }

class Slider extends React.Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slider;