class SignUpPage {

    get continueBtn1() { return $('(//*[contains(@class,"js-continue-b")])[1]')}
    get continueBtn2() { return $('(//*[contains(@class,"js-continue-b")])[2]')}
    get continueBtn3() { return $('(//*[contains(@class,"js-continue-b")])[3]')}
    get continueBtn4() { return $('(//*[contains(@class,"js-continue-b")])[4]')}
    get supEmail() { return $('(//sup[@aria-hidden="true"])[1]/..')}
    get emailInput() { return $('#email')}
    get passwordInput() { return $('#password')}
    get loginInput() { return $('#login')}
    get receiveInput() { return $('#opt_in')}
   
    
    async clickContinueBtn1() {
        await this.continueBtn1.click()
    }

    async isClickableContinueBtn1(){
        await browser.waitUntil(async () => {
            return this.continueBtn1.isClickable()
        }, 2000, "Button is not clickable")
    }

    async clickContinueBtn2() {
        await this.continueBtn2.click()
    }

    async isClickableContinueBtn2(){
        await browser.waitUntil(async () => {
            return this.continueBtn2.isClickable()
        }, 2000, "Button is not clickable")
    }

    async clickContinueBtn3() {
        await this.continueBtn3.click()
    }

    async isClickableContinueBtn3(){
        await browser.waitUntil(async () => {
            return this.continueBtn3.isClickable()
        }, 2000, "Button is not clickable")
    }

    async clickContinueBtn4() {
        await this.continueBtn4.click()
    }

    async isClickableContinueBtn4(){
        await browser.waitUntil(async () => {
            return this.continueBtn4.isClickable()
        }, 2000, "Button is not clickable")
    }

    async setEmailInput(value) {
        await this.emailInput.setValue(value)
    }

    async isClickableEmailInput(){
        await browser.waitUntil ( async () =>{
            return this.emailInput.isClickable();
        }, 2000, "Input is not Clickable")
    }

    async setPasswordInput(value) {
        await this.passwordInput.setValue(value)
    }

    async setLoginInput(value) {
        await this.loginInput.setValue(value)
    }

    async setReceiveInput(value) {
        await this.receiveInput.setValue(value)
    }

}

export default new SignUpPage ()