import AppScreen from "./AppScreen"

class LoginScreen extends AppScreen {
  constructor () {
      super('~Login-screen');
  }

  get loginBtn() { return $("//android.widget.TextView[@text='Log In']") }
  get emailInputBox() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText') }
  get passwordInputBox() { return $('//android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText') }
  get loginBtn2() { return $("//android.widget.Button[@text='Log In']") }

  async login (username, password) {
    await this.loginBtn.click()
    await this.emailInputBox.setValue(username);
    await this.passwordInputBox.setValue(password);
    await this.loginBtn2.click(); 
  }
}

export default new LoginScreen();