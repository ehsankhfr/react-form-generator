import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col, Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

import FormGenerator from './libs/FormGenerator/FormGenerator';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                list: ['firstName', 'lastName', 'phone'],
                configuration: {
                    phone: {type: 'tel'}
                }
            },
            form: {}
        };
    }

    /**
     * Handler for input change
     * @param event Event
     */
    handleInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">React form auto-generation</h1>
                    </header>
                </div>

                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <FormGenerator {...this.state.fields} handleInput={(e) => this.handleInput(e)}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
