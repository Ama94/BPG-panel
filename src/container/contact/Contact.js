import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Map from "../../components/Map/Map.js"

class Contact extends React.Component {
    render() {
        return (
            <Container className={'mt-2'}>
                <Row>
                    <h1>KONTAKT</h1>
                </Row>
                <Row>
                    <h2>Biuro Projektowe
                        Gór-Spec Sp. z o.o.
                    </h2>
                </Row>
                <Row className={"justify-content-center"}>
                    <Col>
                        <Row>
                            Adres:
                            ul. Modrzewiowa 15
                            44-240 Żory
                        </Row>
                        <Row>
                            Telefon:
                            +48 600 377 801
                        </Row>
                        <Row>
                            E-mail:
                            biuro@bpg-s.pl
                            sekretariat@bpg-s.pl
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <b>NIP:</b> 6511737963
                        </Row>
                        <Row>
                            <b>REGON:</b> 387931916
                        </Row>
                        <Row>
                            <b>KRS:</b>00000878468 Sąd Rejonowy
                            w Gliwicach, X Wydział Gospodarczy
                            Krajowego Rejestru Sądowego
                        </Row>
                        <Row>
                            <b>Kapitał Zakładowy Spółki:</b> 5 000,00 zł
                        </Row>
                    </Col>
                </Row>
                <Row className={"justify-content-center mb-4"}>
                    <Map></Map>
                </Row>
            </Container>
        )
    }
}

export default Contact;