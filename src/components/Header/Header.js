import logo from './logo.png';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";

class Header extends React.Component{
    render() {
        return (
            <header className="App-header">
                <div>
                    <Container>
                        <Logo></Logo>
                    </Container>
                </div>
                <div className="App-nav">
                    <Container>
                        <NavBar></NavBar>
                    </Container>
                </div>
            </header>
        )
    }
}

export default Header;