import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, NavLink, Navbar} from "react-bootstrap";
import React from "react";
import Header from "./Header";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar expand="lg ml-4 App-navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="App-nav">
                        <NavLink href={'#'}>Start</NavLink>
                        <NavLink href={'#'}>Aktualności</NavLink>
                        <NavLink href={'#'}>O firmie</NavLink>
                        <NavLink href={'#'}>Oferta</NavLink>
                        <NavLink href={'#'}>Rodo</NavLink>
                        <NavLink className={"last-link"} href={'#'}>Kontakt</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;