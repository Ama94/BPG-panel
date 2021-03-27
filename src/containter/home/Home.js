import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import BPGCard from "../../components/Card/BPG-Card";
import {Container, Row, Col} from "react-bootstrap";
import News from "../../components/News/News";
import Slider from "../../components/Slider/Slider";
class Home extends React.Component{
    render() {
        return (
            <Container className={"mt-2"}>
                <Row className={"justify-content-md-center mb-4"}>
                <Col className={"col-md-9"}>
                <Slider></Slider>
                </Col>
                </Row>
                <Row className={"justify-content-md-center"}>
                <News></News>
                </Row>
                <Row className={"justify-content-md-center"}>
                    <BPGCard></BPGCard>
                    <BPGCard></BPGCard>
                </Row>
                <Row className={"justify-content-md-center"}>
                    <BPGCard></BPGCard>
                    <BPGCard></BPGCard>
                </Row>
            </Container>
        )
    }
}

export default Home;