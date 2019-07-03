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
                <img className="contact-bg-img" src="https://lh3.googleusercontent.com/NnyvVqox0yg7XuIj7XHBcAwwH8oUTXPycaTUHWJLZHWynQDoWxFxMq8I6l43yxT7v8pvYa0_4JsaW8Or-9UBjNq4KKTS7IpftYURoX4YO2Z5uU8zN49LyhLWAodF3UOw7BsG5Y7wvxc7q93DJtfIXaiE1n1yXGi-kJRYWh8waTyzZkTxBdkcfgrZzgnfDymM_nkWn8Bg87Q3Ba6mFIIDYQwOvzOdDcCUlsmR86PFSEigenZi3cKN5dp-YvskeMYHc8K9ljAg1YtUt84D2tNqxvX_xTY4pnaUCYYBxS5MjifpQFBeQIQfpDBl9F47ah2ia5-CO7JSE4rwrUuzvJBFHmTDLpE-exvqag4Z3Kazdb3O53NcnWOlXWI7ziGN0W_y7pFW16_19BQXtm9NzFSnrLuqtpNxZoBd1MIdJVlU9GZ6VrNntIEuCXBPja05ZEVzVIX6RZfk2sMgbef2DhNi82-jIQvZlVRkk0iixC6FflR-Lbww-NPcy9suPeV-2eIdrjaE0U-6FFGokS4iFLh2Ogz--WLZZCTZEFAKfOonrspz6usqWk3iaT08vYkGM6DYGGAFk-C-IzN0X0HI-aWWuhtxBhXWmlN_xug-xdgvgzgot2k_AQ1p9eSLam9gHKvM8fH0tVlomlMrucPnvp9q7qA6nOeFRac=s1542-no" alt="lamp" />
            </div>
        );
    }
}