

class ResourcesGitHub {

    get subscribeText() { return $('//h1[contains(text(),"Subscribe")]')}
    get emailInput() { return $("//*[@id=':R8d7m:']")}
    get countryBtn() { return $("#country")}
    get checkBox() { return $("#gated-agree-marketingEmailOptin1")}
    get submitBtn() { return $("//button[@type='submit']")}
    get subscribingText() { return $("#hero-section-brand-heading")}

    async checkBrowserUrl() {
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/');
    }

    async expectViewResourcesSubscribe() {
        await expect (this.subscribeText).toBeDisplayedInViewport()
    }

    async scrollToEmailInput(){
        await this.emailInput.scrollIntoView()
    }

    async setEmailInput(value) {
        await this.emailInput.setValue(value)
    }

    async clickCountryBtn() {
        await this.countryBtn.click()
    }

    async selectCountryUA() {
        await this.countryBtn.selectByAttribute('Value', 'UA')
    }
    
    async clickOnCheckBox() {
        await this.checkBox.click()
    }

    async clickOnSubmitBtn() {
        await this.submitBtn.click()
    }
    
    async expectViewTextSubscribing() {
        await expect (this.subscribingText).toHaveText('Thanks for subscribing!')
    }

}

export default new ResourcesGitHub