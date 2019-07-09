import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import AboutSocial from '../../component/AboutSocial'
import API from '../../utils/API'
import './Contact.css'

export default class Contact extends Component {
    state = {
        sendName: "",
        sendContact: "",
        sendMessage: "",
        errName: false,
        errContact: false,
        errMsg: false
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    
    handleFormSubmit = event => {
        event.preventDefault()
        const { sendName, sendContact, sendMessage } = this.state
        const data = {
            name: sendName, 
            contact: sendContact, 
            msg: sendMessage
        }

        if ( sendName === "" && sendContact === "" ) {
            this.setState({errName: true, errContact: true, errMsg: false})
        } else if ( sendName !== "" && sendContact === "" ) {
            this.setState({errName: false, errContact: true, errMsg: false})
        } else if ( sendName === "" && sendContact !== "" ) {
            this.setState({errName: true, errContact: false, errMsg: false})
        } else {
            this.setState({errName: false, errContact: false, errMsg: false})
            API
                .saveMessage(data)
                .then(() => {this.setState({ sendContact: "", sendName: "", sendMessage: "" })})
                .catch(err => this.setState({ errMsg: true }, () => console.log(err)))
        }
    }

    render() {
        const { sendName, sendContact, sendMessage, errName, errContact, errMsg } = this.state
        return (
            <div className="contact-container">
                <div className="contact-sub-box">
                    <h4 className="contact-title">Contact</h4>
                    <p><span className="bolder">Telephone: </span>1 (347) 679 - 1939</p>
                    <p><span className="bolder">Email: </span><a href="mailto:he.katherine321@gmail.com">he.katherine321@gmail.com</a></p>
                </div>

                <div className="contact-sub-box">
                    <h4 className="contact-title">Send Message</h4>
                    <form className="contact-form">
                        <input
                            name="sendName"
                            value={sendName}
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                        />
                        <span className={errName ? "err-span" : "err-clear err-span"}>Name is Required</span>

                        <input
                            name="sendContact"
                            value={sendContact}
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Contact"
                            autoComplete="off"
                        />
                        <span className={errContact ? "err-span" : "err-clear err-span"}>Contact info is Required</span>

                        <textarea
                            name="sendMessage"
                            value={sendMessage}
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Message..."
                            autoComplete="off"
                            className="scrollbar scrollbar-message"
                        />
                        <span className={errMsg ? "err-span" : "err-clear err-span"}>We apologize, the message was not able to send</span>
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>

                <div className="contact-sub-box">
                    <h4 className="contact-title">Social Media</h4>
                    <Row>
                        <Col xs={12}>
                            <Row className="social">
                                <AboutSocial iconClass="fab fa-facebook" link="https://www.facebook.com/katherine.he"/>
                                <AboutSocial iconClass="fab fa-github" link="https://github.com/kitkat0202"/>
                                <AboutSocial iconClass="fab fa-instagram" link="https://www.instagram.com/kitkat02029/"/>
                                <AboutSocial iconClass="fab fa-linkedin-in" link="https://www.linkedin.com/in/katherinehe2/"/>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <img className="contact-bg-img" src="https://lh3.googleusercontent.com/z120-6vRn76qxflX4Lf4_Lk08qKqRBqGbQi8RT7qLxSEvd6k3J5Ptj0kLyXJ79OVkFTpND3yvoEr6rfFKX01vdpLET2UdtJb2z2DRbYjcoAF1QOw3O7H5hRYlGK4xt0Onwwk8tyXS_RHPRZTdRVwoeotI7a5V4eEFrEkJWcmhS720bW3alH2vvTCDlRsqJlP49oigoJmpPY6UBbalNb2q4DWFHpoKcDI4L7pMcWi5eJ9-sJjLY4T6sw1VkApZx12E-LJyswRGRy1TKWQadB2h5udEYL2IxU42-br0PycZ-K8VWklGHgnRbTExDIJKNCuHJox3nbDROB-I64chtTxwizT40IiF-Cikniq5-5uojwBDfSzxGLvbCp47rx-i7mwPU71kfJN7xFo0M3hxdJDCP_hHd_Bq0VFuoVXJqkWS_5Ugy4fWVptgwu4aUgi6jl8LIcBsYsg7oEPCfz4th8agwRS2wOVSyshX_gQsbMSU3efqmibsYrI4-DFR2rS7jWRPl-TUX6jO0WccicTVDFphtY02PEFElT6kj2dD8dAbCuYey6wywzLqKzm3pMTIQ5OKVisym0hJZ5nEniHIJ_7gsQ8k0EP3Z13T0K30AQT4_7uaARlX8VxVbFDO9m8dK9lgqOzUl3466ujUdQnZ5cH_GcnIQWNTqA=s937-no" alt="lamp" />
            </div>
        );
    }
}