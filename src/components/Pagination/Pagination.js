import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Col} from "react-bootstrap";


class Pagination extends React.Component {
    render() {
        return (
            <Col className="col-md-3">
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-lg">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Col>
        )
    }
}

export default Pagination;