import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import BPGCard from "../../components/Card/BPG-Card";
import {Container, Row, Col} from "react-bootstrap";
import CardNews from "../../components/CardNews/CardNews";
import ContactImage from "./EWEfinal.png";
import AboutImage from "./uscisk.png";
import OfferImage from "./imageOferta.png";
import RodoImage from "./imageProjekty.png"
import Slajd from "../../components/Slider/Slajd";

class Home extends React.Component {
    render() {
        return (
            <Container className={'mt-2'}>
                <Row className="justify-content-md-center">
                    <Slajd></Slajd>
                </Row>
                <Row className="justify-content-md-center">
                    <CardNews></CardNews>
                </Row>
                <Row className="justify-content-md-center">
                    <BPGCard title={"O firmie"} img={AboutImage} url={""}></BPGCard>
                    <BPGCard title={"Oferta"} img={OfferImage} url={"offer"}></BPGCard>
                </Row>
                <Row className="justify-content-md-center">
                    <BPGCard title={"Rodo"} img={RodoImage} url={"rodo"}></BPGCard>
                    <BPGCard title={"Kontakt"} img={ContactImage} url={"contact"}></BPGCard>
                </Row>
            </Container>
        )
    }
}

export default Home;