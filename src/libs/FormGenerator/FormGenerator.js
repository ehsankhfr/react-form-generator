import React, {Component} from 'react';

import JsonUtils from "../JsonUtils/JsonUtils";
import StringUtils from "../StringUtils/StringUtils";

import {Input, Form, FormGroup, Label} from 'reactstrap';

const DEFAULT_FIELD_TYPE = 'text';

export default class FormGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FIELDS_OBJ: JsonUtils.arrayToJson(this.props.list)
        };
    }

    /**
     * Get the given field's type
     * @param fieldName Field Name
     * @returns {string}
     * @private
     */
    _getFieldType = (fieldName) => (this.props.configuration[fieldName] && this.props.configuration[fieldName].type) ?
        this.props.configuration[fieldName].type :
        DEFAULT_FIELD_TYPE;

    /**
     * Generate Form component
     * @returns {React.Component[]}
     */
    getForm = () => Object.keys(this.state.FIELDS_OBJ).map((fieldName) => (
            <FormGroup key={fieldName}>
                <Label for={fieldName}>{StringUtils.capitalize(fieldName)}</Label>
                <Input
                    type={(this.props.configuration[fieldName] && this.props.configuration[fieldName].type) ?
                        this.props.configuration[fieldName].type :
                        DEFAULT_FIELD_TYPE}
                    name={fieldName}
                    onChange={this.props.handleInput}
                />
            </FormGroup>
        )
    );

    render = () => (<Form>{this.getForm()}</Form>);
}
