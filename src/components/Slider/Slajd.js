import './Slajd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Slider from "./Slider"
import Info from "./Info"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

class Slajd extends React.Component {
    render() {
        return (
            // <div>
            //     <Col className={"col-md-9"}>
            //         <Slider></Slider>
            //     </Col>
            //     <Col>
            //         <Info></Info>
            //     </Col>
            // </div>
            <Card className={"mb-4 mt-4"}>
                <Row>
                    <Col className={"col-md-8"}>
                        <div className={"slider-images"}>
                            <Slider></Slider>
                        </div>
                    </Col>
                    <Col className={"col-md-4"}>
                        <Card.Body>
                            <Row className={"justify-content-md-center"}>
                                    <Card.Title className={"mb-4"}><h1>Skaning 3D</h1></Card.Title>
                            </Row>
                            <Row>
                                <Card.Subtitle><Info></Info></Card.Subtitle>
                            </Row>
                            <Card.Text className={"mt-4"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi vero voluptatem. Architecto cupiditate nemo tempora vel. Ab aut corporis deleniti doloribus eaque iure labore, laudantium magni, non omnis velit?
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default Slajd;