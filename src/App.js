import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Input} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Input type="text"/>
            </div>
        );
    }
}

export default App;