// Bubble.js is to make it possivel to render with a delay
// https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components


import React, { Component, Fragment } from 'react'
import './RandBubble.css'

export default class RandBubble extends Component {
    state = {
        array: [],
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

        this.setState({ array }, () => {
            let bubble = this.state.array.map((e) => (<div key={e.key} className="rand-bubble" style={{ top: `${e.y}vh`, left: `${e.x}vw`, border: `3px solid ${e.border}`, backgroundColor: `${e.bgc}`, height: `${e.size}px`, width: `${e.size}px` }}></div>))
            this.setState({ bubble })
        })
    }

    renderbubble = () => {
        // let array = this.state.bubble.map((e) => (<div key={e.key} className="rand-bubble" style={{ top: `${e.y}vh`, left: `${e.x}vw`, border: `3px solid ${e.border}`, backgroundColor: `${e.bgc}`, height: `${e.size}px`, width: `${e.size}px` }}></div>))
        // return array

        return this.state.bubble


    }

    handleClick = e => {
        this.setState({ clickX: Math.round((e.clientX * 100) / window.innerWidth), clickY: Math.round((e.clientY * 100) / window.innerHeight) }, () => { this.checkbubble() })
    }

    checkbubble = () => {
        let { array, clickX, clickY } = this.state
        console.log(`x: ${clickX} y: ${clickY} `);
        array.forEach((e, i) => {
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
                    array = array.slice(1)
                } else if (i === array.length - 1) {
                    array = array.slice(0, -1)
                } else {
                    array = [...array.slice(0, i), ...array.slice(i + 1)]
                }

                this.setState({ array }, () => {
                    let bubble = this.state.array.map((e) => (<div key={e.key} className="rand-bubble" style={{ top: `${e.y}vh`, left: `${e.x}vw`, border: `3px solid ${e.border}`, backgroundColor: `${e.bgc}`, height: `${e.size}px`, width: `${e.size}px` }}></div>))
                    this.setState({ bubble })
                })
            }
        })
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