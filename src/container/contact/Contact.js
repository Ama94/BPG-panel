import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Map from "../../components/Map/Map.js";
import Title from "../../components/Title/Title";

class Contact extends React.Component {
    render() {
        return (
            <Container className={'mt-2'}>
                    <Row noGutters>
                        <Title title={"Kontakt"}></Title>
                    </Row>
                    <Row  noGutters className={"mt-2"}>
                        <h4 className={"colorb"}>
                            Biuro Projektowe <br/>
                            Gór-Spec Sp. z o.o.
                        </h4>
                    </Row>
                    <Row  noGutters className={"mt-2 mb-4 justify-content-md-center"}>
                        <Col md={6}>
                            <Row noGutters>
                                <p className={"colorb"}>Adres:</p>
                                ul. Modrzewiowa 15 <br/>
                                44-240 Żory
                            </Row>
                            <Row noGutters className={"mt-2"}>
                                <p className={"colorb"}>Telefon:</p>
                                +48 600 377 801
                            </Row>
                            <Row noGutters className={"mt-2"}>
                                <p className={"colorb"}>E-mail:</p>
                                <a href="mailto: biuro@bpg-s.pl">biuro@bpg-s.pl</a> <br/>
                                <a href="mailto: sekretariat@bpg-s.pl">sekretariat@bpg-s.pl</a> <br/>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row noGutters>
                                <b>NIP:</b> 6511737963
                            </Row>
                            <Row noGutters className={"mt-2"}>
                                <b>REGON:</b> 387931916
                            </Row>
                            <Row  noGutters className={"mt-2"}>
                                <b>KRS: </b> 00000878468 Sąd Rejonowy <br/>
                                w Gliwicach, X Wydział Gospodarczy <br/>
                                Krajowego Rejestru Sądowego
                            </Row>
                            <Row noGutters className={"mt-2"}>
                                <b>Kapitał Zakładowy Spółki:</b> 5 000,00 zł
                            </Row>
                        </Col>
                    </Row>
                <Row className={"mb-4"}>
                    <Col md={4}>
                        <Map></Map>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;