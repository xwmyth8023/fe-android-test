export default class AppScreen {

  constructor (selector) {
      this.selector = selector;
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   */
  async waitForIsShown (isShown = true, selector) {
      return $(selector).waitForDisplayed({
          reverse: !isShown,
      });
  }

  async findAndroidElementByText(string) {
    const elment = `android=new UiSelector().textContains("${string}")`;

    return $(elment);
  }

  async findAndroidElementByResourceID(string) {
    const elment = `android=new UiSelector().resourceId("${string}")`;

    return $(elment);
  }
}