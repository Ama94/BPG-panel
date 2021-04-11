import './CardNews.css';
import projekt from './Dzień-Górnika.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button, Row, Col, Image} from "react-bootstrap";
import React from "react";

class CardNews extends React.Component{
    render() {
        return (
            <Card className={"news"}>
            <Row>
                <Col className={"col-md-4"}>
                    <div className={"img-container"}>
                    <Image className={"img-responsive"} src={projekt} />
                    </div>
                </Col>
                <Col className={"col-md-8"}>
                    <Card.Body>
                        <Row className={"justify-content-md-center"}>
                            <Col>
                            <Card.Title className={"mb-5"}><h1>Aktualności</h1></Card.Title>
                            </Col>
                            <Col>
                            <Card.Subtitle className={"mt-2 news-date"}><h3>12.02.2021</h3></Card.Subtitle>
                            </Col>
                        </Row>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque culpa dolor, dolorum eaque eligendi eos est eveniet ex laborum laudantium magnam nemo, non nostrum obcaecati odio repellendus totam veniam!
                        </Card.Text>
                        <Button className={"card-button"} variant="primary" href={"news/test"}>Pokaż więcej</Button>
                    </Card.Body>
                </Col>
            </Row>
            </Card>
        )
    }
}

export default CardNews;