import React, { Component, Fragment } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import language from '../../language.json'
import './CardModal.css';

export default class CardModal extends Component {
    state = {
        complang: ""
    }

    // componentDidMount() {
    //     let thisString = language.filter((language) => {
    //         return language.name === "HTML"
    //     })
    //     console.log(thisString[0].icon)
    // }

    render() {
        const { chosen, onHide } = this.props
        const spanIcon = typeof chosen.tech === "object" ? (
            chosen.tech.map((info, i) => {
                let thisString = language.filter((language) => {
                    return language.name === info
                })
                if (info === "Holochain") {
                    return (<span key={i} className="iconify-text"><img src="https://i0.wp.com/bulltrap.io/wp-content/uploads/2018/11/holochain-logo.jpeg?resize=300%2C210" alt="holochain" style={{border: "none"}}/></span>)
                } else {
                    return (<span key={i} className="iconify" data-icon={thisString[0].span} data-inline="false"></span>)
                }
                
            })
        ) : ""

        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" className="scrollbar scrollbar-message" centered>
                <Button onClick={onHide} variant="danger" className="modal-close-btn">X</Button>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {chosen.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={12} lg={7} className="scrollbar scrollbar-message fix-height">
                            <p className="modal-pinfo modal-date">Date: {chosen.date}</p>

                            {chosen.description === "" ? "" :
                            (<Fragment>
                                <h6 className="bolder">About the Project</h6>
                                <hr />
                                <p className="modal-pinfo modal-descript">{chosen.description}</p>
                            </Fragment>)}

                            {chosen.programming === "" ? "" :
                            (<Fragment>
                                <h6 className="bolder">Back Story</h6>
                                <hr />
                                <p className="modal-pinfo modal-descript">{chosen.programming}</p>
                            </Fragment>)}
                            
                            <h6 className="bolder">Languages</h6>
                            <hr />
                            <p className="modal-pinfo modal-icon">{spanIcon}</p>
                        </Col>
                        <Col md={12} lg={5}>
                            <img src={chosen.imgPath === "" ? `https://via.placeholder.com/405x289` : chosen.imgPath} alt={chosen.name}/>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    {chosen.link === "" ? (
                        <Button href={chosen.github} target="_blank" rel="noopener noreferrer" disabled>Site</Button>
                    ) : (
                        <Button href={chosen.link} target="_blank" rel="noopener noreferrer">Site</Button>
                    )}
                    <Button href={chosen.github} target="_blank" rel="noopener noreferrer">GitHub</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}