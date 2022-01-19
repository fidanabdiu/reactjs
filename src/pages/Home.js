import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Home() {
    return (
        <div>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <h1>WELCOME TO THE HOME PAGE</h1>
                </Col>
                <Col xs={4}></Col>
            </Row>
        </div>
    );
};