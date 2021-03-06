import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className={"App-Footer"}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className={"mt-2"}>
                            <p className="color-white">Biuro Projektowe</p>
                            <p className="color-white">Gór-Spec Sp. z o.o.</p>
                            <p className="color-white">44-240 Żory,</p>
                            <p className="color-white">ul.Modrzewiowa 15</p>
                        </Col>
                        <Col className={"mt-2"}>
                            <p className="color-white">Telefon: +48 600 377 801</p>
                            <p className="color-white ">E-mail:</p>
                            <p><a href="mailto: biuro@bpg-s.pl" className="color-white footer-a">biuro@bpg-s.pl</a></p>
                            <a href="mailto: sekretariat@bpg-s.pl" className="color-white footer-a">sekretariat@bpg-s.pl</a>
                        </Col>
                        <Col className={"col-lg-2 mt-2"}>
                            <a className="navbarmenu color-white footer-a" aria-current="page" href="/">Start></a><br/>
                            <a className="navbarmenu color-white footer-a" href="News">Aktualnosci></a><br/>
                            <a className="navbarmenu color-white footer-a" href="about">O firmie></a><br/>
                            <a className="navbarmenu color-white footer-a" href="offer">Oferta></a><br/>
                            <a className="navbarmenu color-white footer-a" href="rodo">Rodo></a><br/>
                            <a className="navbarmenu color-white footer-a" href="contact">Kontakt></a><br/>
                        </Col>
                    </Row>
                </Container>
                <Row noGutters className={"footer-copyrights"}>
                    <Container>
                        <Col className={"mt-2"}>
                            <p>
                                Biuro Projektowe Gór-Spec ©2017. All rights reserved. <br/>
                                Projekt i Wykonanie: Usługi informatyczne Amadeusz Zięba <br/>
                                Zdjęcia: Vasylina Kityk <br/>
                                Kontakt: <a href="mailto: amadeusz.zieba@gmail.com"></a>amadeusz.zieba@gmail.com
                            </p>
                        </Col>
                    </Container>
                </Row>
            </footer>
        )
    }
}

export default Footer;