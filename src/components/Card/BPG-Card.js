import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from "react-bootstrap";
import React from "react";

class BPGCard extends React.Component{
    render() {
        return (
            <Card className={'cards mb-2 mt-2 ml-4 mr-4'}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body className={"cards-body"}>
                    <Card.Title className={"mb-5"}>{this.props.title}</Card.Title>
                    <Button className={"card-button"} variant="primary" href={this.props.url}>Zobacz więcej</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default BPGCard;