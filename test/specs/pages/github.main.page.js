
class MainPage {

    get signUpBtn() { return $('(//a[contains(@href,"/signup")])[1]') }
    get enterPriceBtn3() { return $('(//a[contains(@href,"/organizations/enterprise_plan")])[3]') }
    get subscribeBtn() { return $('//a[contains(@href,"newsletter/")]')}
    get searchBtn() { return $('//button[contains(@class,"search-button")]')}
    get searchInput() { return $('#query-builder-test')}
    get pricingBtn() { return $('(//a[@href="/pricing"])[1]') }
    get thePlaceH2(){ return $('//h2[contains(text(), "The place") ]')}

    

    async clickOnSignUpBtn() {
        await this.signUpBtn.click()
    }

    async clickOnEnterPriceBtn3() {
        await this.enterPriceBtn3.click()
    }

    async clickOnPricingBtn() {
        await this.pricingBtn.click()
    }

    async clickOnSearchBtn() {
        await this.searchBtn.click()
    }

    async addSearchInput(value) {
        await this.searchInput.addValue(value)
    }

    async scrollToThePlaceH2(){
        await this.thePlaceH2.scrollIntoView()
    }

    async expectViewThePlaceH2() {
        await expect (this.thePlaceH2).toBeDisplayedInViewport()
    }

    async expectViewEnterPriceBtn3() {
        await expect (this.enterPriceBtn3).toBeDisplayedInViewport()
    }

    //Subscribe button
    async scrollToSubscribeBtn(){
        await this.subscribeBtn.scrollIntoView()
    }

    async expectViewSubscribeBtn(){
        await expect (this.subscribeBtn).toBeDisplayedInViewport()
    }

    async expectClickableSubscribeBtn(){
        await expect (this.subscribeBtn).toBeClickable()
    }

    async clickOnSubscribeBtn() {
        await this.subscribeBtn.click()
    }

}

export default new MainPage()