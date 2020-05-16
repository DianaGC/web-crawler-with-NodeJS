const {main} = require('../app');
const getInformation = require('../service/service');

describe('Test App', () => {
    it('When the app is running getInformation should called ome time', () => {
        expect(getInformation).toHaveBeenCalledTimes(1)
    });
})
