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
                <Row noGutters className={"mt-2"}>
                    <h4 className={"colorb"}>
                        Biuro Projektowe <br/>
                        Gór-Spec Sp. z o.o.
                    </h4>
                </Row>
                <Row noGutters className={"justify-content-md-center"}>
                    <Col md={6} className={"contact"}>
                        <Row noGutters>
                            Adres:
                        </Row>
                        <Row noGutters>
                            ul. Modrzewiowa 15 <br/>
                            44-240 Żory
                        </Row>
                        <Row noGutters>
                            Telefon: +48 600 377 801
                        </Row>
                        <Row noGutters>
                            E-mail:
                        </Row>
                        <Row noGutters>
                            <a href="mailto: biuro@bpg-s.pl">biuro@bpg-s.pl</a>
                        </Row>
                        <Row noGutters>
                            <a href="mailto: sekretariat@bpg-s.pl">sekretariat@bpg-s.pl</a> <br/>
                        </Row>
                    </Col>
                    <Col md={6} className={"companyinfo contact"}>
                        <Row noGutters>
                            <b>NIP:</b> 6511737963
                        </Row>
                        <Row noGutters className={"mt-2"}>
                            <b>REGON:</b> 387931916
                        </Row>
                        <Row noGutters className={"mt-2"}>
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
                    <Map></Map>
                </Row>
            </Container>
        )
    }
}

export default Contact;