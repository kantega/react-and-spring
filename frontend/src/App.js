import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    getHello = () => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        setInterval(this.getHello, 250);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.message}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
