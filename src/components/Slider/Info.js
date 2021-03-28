import './Slajd.css';
import img1 from './slajd1.png';
import img2 from './slajd3.png';
import img3 from './slajd6.png';
import img4 from './slajd6.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Card, Button, Row, Col, Image} from "react-bootstrap";

class Info extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <div className={"slider-container"}>
                            <Image src={img1}/>
                        </div>
                    </Col>
                    <Col>
                        <div className={"slider-container"}>
                            <Image src={img2}/>
                        </div>
                    </Col>
                    <Col>
                        <div className={"slider-container"}>
                            <Image src={img3}/>
                        </div>
                    </Col>
                    <Col>
                        <div className={"slider-container"}>
                            <Image src={img4}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Info;