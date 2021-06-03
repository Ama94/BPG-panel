import './CardNews.css';
import projekt from './imageProjekty.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button, Row, Col, Image} from "react-bootstrap";
import React from "react";

class CardNews extends React.Component{
    render() {
        return (
            <Card className={"news mb-2"}>
            <Row noGutters>
                <Col md={4} ml={8} mr={8}>
                    <div className={"img-container"}>
                    <Image className={"img-responsive"} src={projekt} />
                    </div>
                </Col>
                <Col md={8} ml={8} mr={8}>
                    <Card.Body>
                        <Row className={"justify-content-md-center"}>
                            <Col>
                            <Card.Title className={"mb-5"}><h1>{this.props.title}</h1></Card.Title>
                            </Col>
                            <Col>
                            <Card.Subtitle className={"mt-2 news-date"}><h3>{this.props.date}</h3></Card.Subtitle>
                            </Col>
                        </Row>
                        <Card.Text>
                            {this.props.description}
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