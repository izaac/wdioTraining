/**
 * Constructor for abstract Page class
 * @constructor
 */
export default class Page {
  /**
     * Generic locators
     */
  checkboxOrRadioByLabel(value) {
    return $(`div=${value}`);
  }

  customDropdown(name) {
    return $(`select[name=${name}]`);
  }

  open(path) {
    browser.url(`/${path}`);
  }

  switchToNewTab() {
    const openTabs = browser.getTabIds();
    browser.switchTab(openTabs[1]);
  }

  scrollBottom() {
    browser.execute(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  scrollPage() {
    browser.execute(() => {
      window.scrollBy(0, window.innerHeight);
    });
  }

  scrollUntilElementInViewPort(elem) {
    while (!elem.isVisibleWithinViewport()) {
      this.scrollPage();
    }
  }

  acceptJsWarning() {
    let counter = 0;
    while (!browser.alertText() && counter < 3) {
      browser.pause(500);
      counter++;
    }
    browser.alertAccept();
  }

  expectH3(header) {
    $(`h3*=${header}`).waitForVisible();
  }
}

/**
 * Abstract Page class instance to be inherited by all Application pages
 * @type {Page}
 */
