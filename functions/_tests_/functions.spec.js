const {getNumberFromString} = require('../../functions/functions');

describe('Test Functions', () => {
    it('Give a string and value to replace it should return a number', () => {
        let string = '219 points';
        let valueToReplace = ' points';

        expect(getNumberFromString(string, valueToReplace)).toEqual(219);

    });
    it('Give a string and bad value to replace it should return a NaN', () => {
        let string = '219 points';
        let valueToReplace = ' comments';

        expect(getNumberFromString(string, valueToReplace)).toEqual(NaN);

    })
})

