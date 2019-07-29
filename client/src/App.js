import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Error from './pages/404'
import Nav from './component/Nav'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="contain">
                    <Nav />
                    <div className="container-right">
                        <Switch>
                            <Route exact path="/" render={() => <Home /> } />
                            <Route exact path="/home" render={() => <Home /> } /> 
                            <Route exact path="/portfolio" render={() => <Projects /> } /> 
                            <Route exact path="/contact" render={() => <Contact /> } /> 
                            <Route render={() => <Error /> } /> 
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;