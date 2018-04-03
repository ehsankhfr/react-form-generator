import sinon from 'sinon';
import {expect} from 'chai';

import StringUtils from './StringUtils';

describe('/libs/StringUtils', () => {
    beforeEach(() => {
    });

    it('should return empty string with (input == "")', () => {
        expect(StringUtils.capitalize("")).to.equal('');
    });

    it('should return empty string with (input == undefined)', () => {
        expect(StringUtils.capitalize()).to.equal('');
    });

    it('should return expected object from a valid array', () => {
        expect(StringUtils.capitalize('ljl Esakjhsakh DdEs')).to.equal('Ljl Esakjhsakh Dd Es');
    });
});
