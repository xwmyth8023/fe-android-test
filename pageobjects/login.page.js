
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText');
    }

    get inputPassword () {
        return $('//android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText');
    }

    get btnLogin () {
        return $("//android.widget.TextView[@text='Log In']");
    }

    get btnLogin2 () {
      return $("//android.widget.Button[@text='Log In']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.btnLogin.click()
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin2.click(); 
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new LoginPage();
