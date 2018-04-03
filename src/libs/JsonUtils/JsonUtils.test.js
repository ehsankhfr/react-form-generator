import sinon from 'sinon';
import {expect} from 'chai';

import JsonUtils from './JsonUtils';

describe('/libs/JsonUtils', () => {
    beforeEach(() => {
    });

    it('should return empty object with (input == [])', () => {
        expect(JsonUtils.arrayToJson([])).to.deep.equal({});
    });

    it('should return empty object with (input == undefined)', () => {
        expect(JsonUtils.arrayToJson()).to.deep.equal({});
    });

    it('should return expected object from a valid array', () => {
        expect(JsonUtils.arrayToJson(['abcd'])).to.deep.equal({'abcd': 'abcd'});
    });
});
