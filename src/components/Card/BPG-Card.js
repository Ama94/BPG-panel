import './Card.css';
import projekt from '../News/imageProjekty.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from "react-bootstrap";
import React from "react";

class BPGCard extends React.Component{
    render() {
        return (
            <Card className={"mb-2 mt-2 ml-2 mr-2"}>
                <Card.Img variant="top" src={projekt} />
                <Card.Body className={"cards-body"}>
                    <Card.Title className={"mb-5"}>Projekty</Card.Title>
                    <Button className={"card-button"} variant="primary">Pokaż więcej</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default BPGCard;