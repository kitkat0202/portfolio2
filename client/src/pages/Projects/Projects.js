import React, { Component, Fragment } from 'react'
import { Row, ButtonToolbar } from 'react-bootstrap';
import Card from '../../component/Card'
import CardModal from '../../component/Card/CardModal'
import StaticInfo from '../../data.json'
import API from '../../utils/API'
import './Projects.css'

export default class Projects extends Component {
    state = {
        modalShow: false,
        data: StaticInfo,
        info: {}
    }

    componentDidMount() {
        API
            .getAllProject()
            .then(res => this.setState({ data: res.data }, () => console.log(this.state.data)))
            .catch(err => console.log(err))
    }

    render() {
        let { data } = this.state

        // open modal
        const modalOpen = () => this.setState({ modalShow: true })

        // close modal
        const modalClose = () => this.setState({ modalShow: false })

        // add info to modal
        const pullInfo = info => {
            this.setState({ info }, () => console.log(this.state.info))
        }

        // project cards
        const renderCards = data.map((card, i) => {
            return (
                <Card key={i} info={card} infoFunction={pullInfo} onOpen={modalOpen}/>
            )
        })

        return (
            <Fragment>
                <ButtonToolbar>
                    <CardModal show={this.state.modalShow} onHide={modalClose} chosen={this.state.info}/>
                </ButtonToolbar>
                <div className="container-project">
                    <Row>
                        {renderCards}
                    </Row>
                </div>
                <img className="project-bg-img" src="https://lh3.googleusercontent.com/Lc0PtGYeSXK8ygZP-XpwGhlQIsfh-gH_paZg52y5d9ob02aOpchw01-flJcEF1VRt3hN0ucGxFKBXt9e_92_XNKWgSVJu4cf9f2SX52yFSP1cfp5s72jo-6Ui3gDeuYkzoMVVUCuW1rM4qDvZ5PUygPvnWWgsTdUChB-CN7-jDLFJerW0k33i1L3yF_4LZc8YMUvwcP84o-3zKlyX-JNbraT8EdAQ9Z-ncpjj9HV5QL7tm6QpEKCxbegz6SgVIQTivDcY3kxNYcV0g5kxLKNCVkwYdXu5zpBdJgSgQfWBAtn918l6b6gRFPdxLv3X_04LwOd2n7nh3vLMRWvdww7DZ8n3ryPckUgvSN27Q16hIGyBxLXwOYEosvZgnlRhLyb_FRCV0y58xVYddWiI-ZSIpG9C2tqNGsM7qIXTFLyOMOKBFinAep0bQw_KQoazFNLmrQuuoUPpg1JovtesvMNQTQLxCuvwwwTKuPwoKFbv0H0JYeROsJ1WqrZC8dT_eFbliOLitFeUlMiFS7Hq-Vft9BcQml6bN1JuX4bajETlps-CkWMtqRP1BllnR0BG_8f_igBuQwCJm5kBO_cMK4yLNNDWLRzLt-tSx6J6k0UyT2jTjEf4APe4l5JJl2q-XXs5oaPRnDqaofZ1vgvM_CeqJmjEpXKhdQ=w2054-h1542-no" alt="mountain" />
            </Fragment>
        );
    }
}