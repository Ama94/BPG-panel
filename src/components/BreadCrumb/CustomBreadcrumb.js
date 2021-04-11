import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import React from "react";


class CustomBreadcrumb extends React.Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>

        )
    }
}

export default CustomBreadcrumb;