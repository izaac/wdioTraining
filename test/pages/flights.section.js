import Page from './page';

class FlightsSection extends Page {
    /**
     * define elements
     */
    get flightsTab() {
        return $('[data-tab="flight"]');
    }

    get flyingFromInput() {
        return $('#flight-origin');
    }

    clickflightsTab() {
        this.flightsTab.waitForVisible();
        this.flightsTab.click();
    }
}

export const flightsSection = new FlightsSection();
