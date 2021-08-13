import './CardNews.css';
import projekt from './imageProjekty.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button, Row, Col, Image} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

class CardNews extends React.Component {
    render() {
        return (
            <Card className={"news mb-4"}>
                <Card.Header><h5>{this.props.date}</h5></Card.Header>
                <Row noGutters>
                    <Col md={4} ml={8} mr={8}>
                        <div className={"img-container"}>
                            <Image className={"img-responsive"} src={"http://bpg-s.pl/" + this.props.image}/>
                        </div>
                    </Col>
                    <Col md={8} ml={8} mr={8}>
                        <Card.Body>
                            <Card.Title className={""}><h3>{this.props.title}</h3></Card.Title>
                            <Card.Text className={"card-trunca"}>
                                {this.props.description}
                            </Card.Text>
                            <Link
                                to={`/single_news/?id=${this.props.id}`}
                            >
                                <Button className={"card-button mb-2"} variant="primary">Pokaż
                                    więcej</Button>
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

        )
    }
}


export default CardNews;