import slide1 from './slajd1.png';
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
                    <Col md={6} ml={2} mr={2}>
                        <Row noGutters className={"mb-2"}>
                            <div className={"slider-images"}>
                                 <img className="d-block" src={this.props.image}  alt="First slide"/>
                            </div>
                        </Row>
                        <Row noGutters>
                            <Card.Subtitle></Card.Subtitle>
                        </Row>
                    </Col>
                    <Col md={6} ml={8} mr={8}>
                        <Card.Body>
                            <Row className={"justify-content-md-center"}>
                                <Card.Title className={"mb-2"}><h1>{this.props.title}</h1></Card.Title>
                            </Row>
                            <Card.Text className={"mt-2 card-trunc"}>
                                {this.props.description}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default Slajd;