import Page from './page';

class SearchResults extends Page {
    /**
     * define elements
     */

    get resultsList() {
        return $('#flightModuleList');
    }

}

export const searchResults = new SearchResults();
