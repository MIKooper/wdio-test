class PricingPage {

    get pricingTextH1 (){ return $('//h1[@class="h2-mktg"]')}
    get compareBtn (){ return $('//a[@href="#compare-features"]')}
    get compareTextH1() { return $("//h1[text()='Compare features']")}

    async expectViewPricingTextH1() {
        await expect (this.pricingTextH1).toBeDisplayedInViewport()
    }

    async scrollToCompareBtn() {
        await this.compareBtn.scrollIntoView()
    }

    async clickOnCompareBtn() {
        await this.compareBtn.click()
    }

    async scrollToCompareTextH1() {
        await this.compareTextH1.scrollIntoView({ block: 'center'})
    }

    async expectViewCompareTextH1() {
        await expect (this.compareTextH1).toBeDisplayedInViewport()
    }

}

export default new PricingPage()