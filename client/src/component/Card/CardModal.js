import React, { Component } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import './CardModal.css';

export default class CardModal extends Component {
    state = {
        complang: ""
    }

    render() {
        const { chosen, onHide } = this.props
        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {chosen.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} md={5}>
                            <p className="modal-pinfo"><span className="bolder">Description: </span>{chosen.description}</p>
                            <p className="modal-pinfo"><span className="bolder">Computer Language: </span>{typeof chosen.tech === "object" ? chosen.tech.join(", ") : ""}</p>
                        </Col>
                        <Col xs={12} md={7}>
                            <img src={chosen.imgPath === "" ? `https://via.placeholder.com/405x289` : chosen.imgPath} alt={chosen.name}/>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button href={chosen.link} target="_blank" rel="noopener noreferrer">Site</Button>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}