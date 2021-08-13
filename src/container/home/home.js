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
import SubTitle from "../../components/SubTitle/Subtitle";
import Line from "../../components/Line/Line";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://bpg-s.pl/bpg-api/api/news/read.php")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Ładowanie...</div>;
        } else {
        return (
            <Container className={'mt-2'}>
                <Row noGutters className={"justify-content-md-center ml-4 mr-4"}>
                    <Slajd></Slajd>
                </Row>
                <SubTitle title={"Aktualnosci"}></SubTitle>
                <Row noGutters className={"justify-content-md-center ml-4 mr-4"}>
                    <CardNews title={items[0].title} description={items[0].description} date={items[0].date} image={items[0].image} id={items[0].id}></CardNews>
                </Row>
                <Line></Line>
                <Row className={"justify-content-md-center"}>
                    <BPGCard title={"O firmie"} img={AboutImage} url={""}></BPGCard>
                    <BPGCard title={"Oferta"} img={OfferImage} url={"offer"}></BPGCard>
                </Row>
                <Row className={"justify-content-md-center mb-4"}>
                    <BPGCard title={"Rodo"} img={RodoImage} url={"rodo"}></BPGCard>
                    <BPGCard title={"Kontakt"} img={ContactImage} url={"contact"}></BPGCard>
                </Row>
            </Container>
        )
    }
}
}

export default Home;