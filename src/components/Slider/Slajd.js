import './Slajd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Slider from "./Slider"
import Info from "./Info"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

class Slajd extends React.Component {
    render() {
        return (
            <Card className={"mb-4 mt-4"}>
                <Row>
                    <Col className={"col-md-6"}>
                        <Row noGutters className={"mb-2"}>
                            <div className={"slider-images"}>
                                <Slider></Slider>
                            </div>
                        </Row>
                        <Row noGutters>
                            <Card.Subtitle><Info></Info></Card.Subtitle>
                        </Row>
                    </Col>
                    <Col className={"col-md-6"}>
                        <Card.Body>
                            <Row className={"justify-content-md-center"}>
                                <Card.Title className={"mb-4"}><h1>Skaning 3D</h1></Card.Title>
                            </Row>
                            <Card.Text className={"mt-4"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi vero
                                voluptatem. Architecto cupiditate nemo tempora vel. Ab aut corporis deleniti doloribus
                                eaque iure labore, laudantium magni, non omnis velit?
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default Slajd;