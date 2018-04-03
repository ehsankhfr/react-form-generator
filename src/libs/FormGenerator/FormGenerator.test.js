import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

import FormGenerator from './FormGenerator';

describe('/libs/FormGenerator', () => {
    beforeEach(() => {
    });

    it('renders without crashing', () => {
        const props = {
            list: ['firstName', 'lastName', 'phone'],
            configuration: {
                phone: {type: 'tel'}
            },
            handleInput: () => null
        };

        const _FormGenerator = shallow(<FormGenerator {...props}/>);
    });

    it('Change input should call the passed handler', () => {
        const props = {
            list: ['firstName', 'lastName', 'phone'],
            configuration: {
                phone: {type: 'tel'}
            }
        };

        const handler = sinon.stub();
        const _FormGenerator = shallow(<FormGenerator {...props} handleInput={() => handler()}/>);

        _FormGenerator.dive().find('Input').forEach(elem => elem.simulate('change', {target: {value: '7'}}));

        expect(handler.called).to.be.ok;
    });
});
