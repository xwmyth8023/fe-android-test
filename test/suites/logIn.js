import LoginPage from  '../../pageobjects/login.page';

describe('test login', async () => {
  it('test 1', async () => {
    await LoginPage.login('sxiong@xogrp.com', '1234567');
    // const loginBtn = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
    // await loginBtn.click()
  })
})