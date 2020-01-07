// https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components

import React, { Component } from 'react'
import './RandBubble.css'

export default class RandBubble extends Component {
    state = {
        hidden: "hidden"
    }

    render() {
        return (
            <div key={e.key} className="rand-bubble" style={{ top: `${e.y}vh`, left: `${e.x}vw`, border: `3px solid ${e.border}`, backgroundColor: `${e.bgc}`, height: `${e.size}px`, width: `${e.size}px` }}></div>
        )
    }
}

// var Child = React.createClass({
//     getInitialState : function () {
//         return({hidden : "hidden"});
//     },
//     componentWillMount : function () {
//         var that = this;
//         setTimeout(function() {
//             that.show();
//         }, that.props.wait);
//     },
//     show : function () {
//         this.setState({hidden : ""});
//     },
//     render : function () {
//         return (
//             <div className={this.state.hidden}>
//                 <p>Child</p>
//             </div>
//         )
//     }
// });


// on RandomBubble.js 
// var Parent = React.createClass({
//     render : function () {
//         return (
//             <div className="parent">
//                 <p>Parent</p>
//                 <div className="child-list">
//                     <Child wait={1000} />
//                     <Child wait={3000} />
//                     <Child wait={5000} />
//                 </div>
//             </div>
//         )
//     }
// });