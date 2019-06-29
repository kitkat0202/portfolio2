import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './Card.css';

export default class Card extends Component {
    render() {
        let { info } = this.props

        return (
            <Col sm={12} md={6} lg={4}>
                <p>{`-- Name: ${info.name}`}</p>
            </Col>
        );
    }
}