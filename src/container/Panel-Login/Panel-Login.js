import './PanelLogin.css';
import Logo from "../../components/Header/Logo"
import Login from "../../components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Container, Row, Col,} from "react-bootstrap";


class PanelLogin extends React.Component {
    render() {
        return (
            <center>
            <Container className={"justify-content-center"}>
            <Row className="justify-content-md-center" mt={8} mb={8}>
                <Logo></Logo>
            </Row>
                <Row className="justify-content-md-center" mt={8} mb={8}>
                <Login></Login>
                </Row>
            </Container>
            </center>
        )
    }
}

export default PanelLogin;