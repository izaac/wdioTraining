import Page from './page';
import { searchResults } from './searchResults.page'

class FlightsSection extends Page {
    /**
     * define elements
     */
    get flightsTab() {
        return $('[data-tab="flight"]');
    }

    get flightTypeOneWay() {
        return $('#flight-type-one-way-label');
    }

    get flightOriginInput() {
        return $('#flight-origin');
    }

    get flightDestinationInput() {
        return $('#flight-destination');
    }

    get flightDepartingDate() {
        return $('#flight-departing');
    }

    get searchButton() {
        return $('#search-button');
    }

    get datePickerCloseButton() {
        return $('button.datepicker-close-btn');
    }

    clickflightsTab() {
        this.flightsTab.waitForVisible();
        this.flightsTab.click();
    }

    clickFlightTypeOneWay() {
        this.flightTypeOneWay.waitForVisible();
        this.flightTypeOneWay.click();
    }

    clickDatePickerCloseButton() {
        this.datePickerCloseButton.waitForVisible();
        this.datePickerCloseButton.click();
    }

    clickSearchButton() {
        this.searchButton.waitForVisible();
        this.searchButton.click();
        return searchResults;
    }

    fillFlightOriginInput(city = 'New York, NY (NYC-All Airports)') {
        this.flightOriginInput.waitForVisible();
        this.flightOriginInput.setValue(city);
    }

    fillFlightDestinationInput(city = 'Paris, France (CDG-Roissy-Charles de Gaulle)') {
        this.flightDestinationInput.waitForVisible();
        this.flightDestinationInput.setValue(city);
    }

    fillFlightDepartingDate(date = '12/08/2017') {
        this.flightDepartingDate.waitForVisible();
        this.flightDepartingDate.click();
        this.flightDepartingDate.setValue(date);
    }
}

export const flightsSection = new FlightsSection();
