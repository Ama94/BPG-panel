import "react-image-gallery/styles/css/image-gallery.css";
import './Slajd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'http://bpg-s.pl/images/slajdy/slajd1.jpg',
        thumbnail: 'http://bpg-s.pl/images/slajdy/slajd1.jpg',
        originalTitle: 'Inwentaryzacja laserowa wyrobisk dołowych',
    },
    {
        original: 'http://bpg-s.pl/images/slajdy/slajd4.jpg',
        thumbnail: 'http://bpg-s.pl/images/slajdy/slajd4.jpg',
        originalTitle: 'Inwentaryzacja laserowa wyrobisk dołowych',
    },
    {
        original: 'http://bpg-s.pl/images/slajdy/slajd2.jpg',
        thumbnail: 'http://bpg-s.pl/images/slajdy/slajd2.jpg',
        originalTitle: 'Inwentaryzacja laserowa naziemnych obszarów przemysłowych',
    },
    {
        original: 'http://bpg-s.pl/images/slajdy/slajd3.jpg',
        thumbnail: 'http://bpg-s.pl/images/slajdy/slajd3.jpg',
        originalTitle: 'Inwentaryzacja laserowa obiektów urbanistycznych',
    },

];

function focusTextInput() {
    return this.myRef.current.getCurrentIndex();
}

class Slajd extends React.Component {
    state = {activeIndex: 1};

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        // this.setState({ activeIndex: 1});

    }

    render() {
        return (
            <Card className={"mb-4 mt-4"}>
                <Row>
                    <Col md={6} ml={2} mr={2}>
                        <ImageGallery items={images} showPlayButton={false} ref={i => this._imageGallery = i}
                                      onClick={(e, {index}) => this.setState({activeIndex: this._imageGallery.getCurrentIndex})}/>
                        <Row noGutters className={"mb-2"}>
                            <div className={"slider-images"}>
                            </div>
                        </Row>
                    </Col>
                    <Col md={6} ml={8} mr={8}>
                        <Card.Body>
                            <Row className={"justify-content-md-center"}>
                                <Card.Title><h1>Realizujemy Inwentaryzacje laserowe:</h1></Card.Title>
                            </Row>
                            <Card.Text className={"mt-2"}>
                                <h4 className={"mb-3"}>1. wyrobisk dołowych pionowych.</h4>
                                <h4 className={"mb-3"}>2. wyrobisk dołowych poziomych.</h4>
                                <h4 className={"mb-3"}>3. naziemnych obszarów przemysłowych.</h4>
                                <h4 className={"mb-3"}>4. obiektów urbanistycznych.</h4>
                                {/*<h5 className={"mb-3"}>4. wyrobisk dołowych</h5>*/}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default Slajd;