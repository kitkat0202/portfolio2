import React, { Component } from 'react'
import API from '../../utils/API'
import './Contact.css'

export default class Contact extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        API
            .getAllMessage()
            .then(res => this.setState({ data: res.data }, () => console.log(this.state.data)))
            .catch(err => console.log(err))
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
                <div className="contact-info">
                    <p><span className="bolder">Telephone: </span>1 (347) 679 - 1939</p>
                    <p><span className="bolder">Email: </span><a href="mailto:he.katherine321@gmail.com">he.katherine321@gmail.com</a></p>
                </div>
                <div className="contact-social"></div>
                <div className="contact-msg"></div>
                <ul>
                    {renderCards}
                </ul>
            </div>
        );
    }
}