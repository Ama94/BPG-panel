import './SingleNews.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import img1 from './slajd1.png';
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/Subtitle";
import CustomBreadcrumb from "../../components/BreadCrumb/CustomBreadcrumb";


class SingleNews extends React.Component {
    render() {
        return (
            <Container className={'mt-2 mb-4'}>
                <Title title={"Aktualności"}></Title>
                <CustomBreadcrumb></CustomBreadcrumb>
                <Row>
                    <Col className={"md-6"}>
                        <Image className={"news-img"} src={img1}/>
                    </Col>
                    <Col className={"md-8"}>
                        <Title title={"Mincraft serwer"}></Title>
                        <h3 className={"SN-date"}>12.02.2021</h3>
                        <p className={"news-text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda autem commodi
                        consequatur deleniti dolores ducimus eaque eligendi eveniet in ipsum iure labore laboriosam odio
                        quidem, recusandae soluta unde ut!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <p className={"news-text"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda autem commodi
                    consequatur deleniti dolores ducimus eaque eligendi eveniet in ipsum iure labore laboriosam odio
                    quidem, recusandae soluta unde ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda autem commodi
                    consequatur deleniti dolores ducimus eaque eligendi eveniet in ipsum iure labore laboriosam odio
                    quidem, recusandae soluta unde ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda autem commodi
                    consequatur deleniti dolores ducimus eaque eligendi eveniet in ipsum iure labore laboriosam odio
                    quidem, recusandae soluta unde ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda autem commodi
                    consequatur deleniti dolores ducimus eaque eligendi eveniet in ipsum iure labore laboriosam odio
                    quidem, recusandae soluta unde ut!
                    </p>
                </Row>
            </Container>
        )
    }
}

export default SingleNews;