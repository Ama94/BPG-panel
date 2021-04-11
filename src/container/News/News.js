import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CardNews from "../../components/CardNews/CardNews";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";


class News extends React.Component {
    render() {
        return (
            <Container id="podstrona">
               <Title title={"Aktualności"}></Title>
                <Row className="justify-content-md-center">
                    <CardNews></CardNews>
                    <CardNews></CardNews>
                    <CardNews></CardNews>
                </Row>
                <Row className="justify-content-md-center">
                    <Pagination></Pagination>
                </Row>
            </Container>

        )
    }
}

export default News;