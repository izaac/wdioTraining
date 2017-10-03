import {flightsSection} from "../../pages/flights.section";

describe('My React Test', function () {
    beforeEach(function() {
      flightsSection.open('');
    });

    it('should click flights', function () {
        flightsSection.clickflightsTab();
        flightsSection.flyingFromInput.waitForVisible();
        expect(flightsSection.flyingFromInput.isVisible()).to.eq(true);
    })
});
