import React, { Component } from 'react'
import './App.scss';
import Input from './Input.js'
import { Route, BrowserRouter as Router } from "react-router-dom"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Anime List</h1>
                    <Route path="/" component={Input} />
                </div>
            </Router>
        )
    }
}

export default App;