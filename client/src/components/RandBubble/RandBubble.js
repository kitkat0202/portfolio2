import React, { Component, Fragment } from 'react'
import './RandBubble.css'

export default class RandBubble extends Component {
    state = {
        bubble: [],
        clickX: 0,
        clickY: 0
    }

    componentDidMount() {
        const { minbubbles, maxbubbles } = this.props
        this.getdata(this.randomNum(minbubbles, maxbubbles))

        document.addEventListener('mouseup', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.handleClick);
    }

    randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }

    getdata = num => {
        let array = []
        const colors = ["var(--primaryLight)", "var(--navColor)", "#fff"]
        for (let i = num; i > 0; i--) {
            const y = this.randomNum(0, 90)
            const x = this.randomNum(0, 90)
            const size = this.randomNum(15, 100)
            const border = colors[this.randomNum(0, 3)]
            const bgc = (border === "var(--navColor)" ? "#fff" : border === "#fff" ? colors[this.randomNum(0, 2)] : colors[this.randomNum(0, 3)])
            array.push({ x, y, size, border, bgc, key: array.length })
        }
        this.setState({ bubble: array })
    }

    renderbubble = () => {
        let array = this.state.bubble.map((e) => (<div key={e.key} className="rand-bubble" style={{ top: `${e.y}vh`, left: `${e.x}vw`, border: `3px solid ${e.border}`, backgroundColor: `${e.bgc}`, height: `${e.size}px`, width: `${e.size}px` }}></div>))
        return array
    }

    handleClick = e => {
        this.setState({ clickX: Math.round((e.clientX * 100) / window.innerWidth), clickY: Math.round((e.clientY * 100) / window.innerHeight) }, () => { this.checkbubble() })
    }

    checkbubble = () => {
        let { bubble, clickX, clickY } = this.state
        console.log(`x: ${clickX} y: ${clickY} `);
        bubble.forEach((e, i) => {
            const sizeToVw = Math.ceil(((e.size) * 100) / window.innerWidth)
            const sizeToVh = Math.ceil(((e.size) * 100) / window.innerHeight)

            // if (e.x < clickX && clickX < (sizeToVw + e.x)) {
            //     console.log([`${e.key} -- ${e.x < clickX && clickX < (sizeToVw + e.x) && e.y < clickY && clickY < (sizeToVh + e.y)}`, 
            //     `xStart -- ${e.x}`, 
            //     `xEnd -- ${sizeToVw + e.x}`, 
            //     `yStart -- ${e.y}`, 
            //     `yEnd -- ${sizeToVh + e.y}`])
            // }


            if (e.x < clickX && clickX < (sizeToVw + e.x) && e.y < clickY && clickY + 1 < (sizeToVh + e.y)) {
                if (i === 0) {
                    bubble = bubble.slice(1)
                } else if (i === bubble.length - 1) {
                    bubble = bubble.slice(0, -1)
                } else {
                    bubble = [...bubble.slice(0, i), ...bubble.slice(i + 1)]
                }
                this.setState({ bubble })
            }
        })
    }

    removeBubble = () => {

    }

    render() {
        const { page } = this.props
        return (
            <Fragment>
                {page === "home" || page === "" ? this.renderbubble() : ""}
            </Fragment>
        )
    }
}