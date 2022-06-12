import driver from "appium-uiautomator2-driver/build/lib/driver"

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    async getActivity(){
      const avtivity = await driver.getActivity()
      console.log('activity:',avtivity)
      return avtivity
    }

    async getAppPackage(){
      const appPackage = await driver.getCurrentPackage()
      console.log('appPackage:',appPackage)
      return appPackage
    }
}
