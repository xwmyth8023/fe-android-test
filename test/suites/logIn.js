import LoginScreen from  '../../pageobjects/screens/logInScreen';

describe('test login', async () => {
  it('test 1', async () => {
    await LoginScreen.login('sxiong@xogrp.com', '1234567');
    // const loginBtn = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
    // await loginBtn.click()
  })
})