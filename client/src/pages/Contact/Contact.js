import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import AboutSocial from '../../component/AboutSocial'
import API from '../../utils/API'
import './Contact.css'

export default class Contact extends Component {
    state = {
        data: [],
        sendName: "",
        sendContact: "",
        sendMessage: ""
    }

    componentDidMount() {
        API
            .getAllMessage()
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    
    handleFormSubmit = event => {
        event.preventDefault()
        const data = {
            name: this.state.sendName, 
            contact: this.state.sendContact, 
            msg: this.state.sendMessage
        }

        console.log(data);
        

        // API
        //     .saveMessage(data)
        //     .then(res => {
        //         this.setState({ sendContact: "", sendName: "", sendMessage: "" }, () => console.log(res))
        //     })
    }

    render() {
        let { data } = this.state

        let renderCards = data.map((card, i) => {
            return (
                <li key={i}>{`id: ${card._id} -- Name: ${card.name}`}</li>
            )
        })

        return (
            <div className="contact-container">
                <div className="contact-sub-box">
                    <h3 className="contact-title">Contact</h3>
                    <p><span className="bolder">Telephone: </span>1 (347) 679 - 1939</p>
                    <p><span className="bolder">Email: </span><a href="mailto:he.katherine321@gmail.com">he.katherine321@gmail.com</a></p>
                </div>

                <div className="contact-sub-box">
                    <h3 className="contact-title">Send Message</h3>
                    <form className="contact-form">
                        <input
                            name="sendName"
                            value={this.state.sendName}
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                        />

                        <input
                            name="sendContact"
                            value={this.state.sendContact}
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Contact"
                            autoComplete="off"
                        />

                        <textarea
                            name="sendMessage"
                            value={this.state.sendMessage}
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Message..."
                            autoComplete="off"
                            className="scrollbar scrollbar-message"
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>

                <div className="contact-sub-box">
                    <h3 className="contact-title">Social Media</h3>
                    <Row>
                        <Col xs={12}>
                            <Row className="social">
                                <AboutSocial iconClass="fab fa-facebook" link="https://www.facebook.com/katherine.he"/>
                                <AboutSocial iconClass="fab fa-github" link="https://github.com/kitkat0202"/>
                                <AboutSocial iconClass="fab fa-instagram" link="https://www.instagram.com/kitkat020290/"/>
                                <AboutSocial iconClass="fab fa-linkedin-in" link="https://www.linkedin.com/in/katherinehe2/"/>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <img className="contact-bg-img" src="https://lh3.googleusercontent.com/NnyvVqox0yg7XuIj7XHBcAwwH8oUTXPycaTUHWJLZHWynQDoWxFxMq8I6l43yxT7v8pvYa0_4JsaW8Or-9UBjNq4KKTS7IpftYURoX4YO2Z5uU8zN49LyhLWAodF3UOw7BsG5Y7wvxc7q93DJtfIXaiE1n1yXGi-kJRYWh8waTyzZkTxBdkcfgrZzgnfDymM_nkWn8Bg87Q3Ba6mFIIDYQwOvzOdDcCUlsmR86PFSEigenZi3cKN5dp-YvskeMYHc8K9ljAg1YtUt84D2tNqxvX_xTY4pnaUCYYBxS5MjifpQFBeQIQfpDBl9F47ah2ia5-CO7JSE4rwrUuzvJBFHmTDLpE-exvqag4Z3Kazdb3O53NcnWOlXWI7ziGN0W_y7pFW16_19BQXtm9NzFSnrLuqtpNxZoBd1MIdJVlU9GZ6VrNntIEuCXBPja05ZEVzVIX6RZfk2sMgbef2DhNi82-jIQvZlVRkk0iixC6FflR-Lbww-NPcy9suPeV-2eIdrjaE0U-6FFGokS4iFLh2Ogz--WLZZCTZEFAKfOonrspz6usqWk3iaT08vYkGM6DYGGAFk-C-IzN0X0HI-aWWuhtxBhXWmlN_xug-xdgvgzgot2k_AQ1p9eSLam9gHKvM8fH0tVlomlMrucPnvp9q7qA6nOeFRac=s1542-no" alt="lamp" />

                {/* <ul>
                    {renderCards}
                </ul> */}
            </div>
        );
    }
}