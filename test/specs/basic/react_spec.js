import { flightsSection } from '../../pages/flights.section';

describe('My flights Test', () => {
    beforeEach(function() {
      flightsSection.open('');
    });

    it('should click flights and do a basic search', function () {
        flightsSection.clickflightsTab();
        flightsSection.flightOriginInput.waitForVisible();
        expect(flightsSection.flightOriginInput.isVisible()).to.eq(true);
        flightsSection.clickFlightTypeOneWay();
        flightsSection.fillFlightOriginInput();
        flightsSection.fillFlightDestinationInput();
        flightsSection.fillFlightDepartingDate();
        flightsSection.clickDatePickerCloseButton();
        expect(flightsSection.clickSearchButton().resultsList.isVisible()).to.be.true;
    })
});
