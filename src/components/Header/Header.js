import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";
import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import News from "../News/News";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Logo></Logo>
                        </Row>
                    </Container>
                </div>
                <div className="App-nav">
                    <Container>
                        <Row className="justify-content-md-center">
                            <NavBar></NavBar>
                        </Row>
                    </Container>
                </div>
            </header>
        )
    }
}

export default Header;