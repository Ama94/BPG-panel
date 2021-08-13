import './SingleNews.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Container, Row, Col,} from "react-bootstrap";
import Title from "../../components/Title/Title";
import CustomBreadcrumb from "../../components/BreadCrumb/CustomBreadcrumb";
import ImageGallery from 'react-image-gallery';



class SingleNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(document.location.search);
        const id = urlParams.get("id");
        fetch("http://bpg-s.pl/bpg-api/api/news/read_one.php?id=" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Ładowanie...</div>;
        } else {
            const images = [
                {
                    original: `http://bpg-s.pl/${items[0].image}`,
                    thumbnail: `http://bpg-s.pl/${items[0].image}`,
                }
            ];
            return (
                <Container className={'mt-2 mb-4'}>
                    <Title title={"Aktualności"}></Title>
                    {/*<CustomBreadcrumb></CustomBreadcrumb>*/}
                    <Row>
                        <Col md={6} ml={2} mr={2}>
                            <Row noGutters className={"mb-2"}>
                                <div className={"slider-images"}>
                                    <ImageGallery items={images} />
                                </div>
                            </Row>
                        </Col>
                        <Col className={"md-8"}>
                            <Title title={items[0].title}></Title>
                            <h3 className={"SN-date"}>{items[0].date}</h3>
                            <p className={"news-text"}>{items[0].description}</p>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default SingleNews;