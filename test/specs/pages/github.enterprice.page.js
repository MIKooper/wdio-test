

class EnterPrice {
    get trialPlan() { return $('//h1[contains(text(),"trial plan")]')}
    get enterpriceCloud() { return $('//*[contains(@href,"/account/enterprises/new")]')}
    
    
    async clickOnEnterpriceCloud() {
        await this.enterpriceCloud.click()
    }

    async expectViewTrialPlan() {
        await expect (this.trialPlan).toBeDisplayedInViewport()
    }

}
export default new EnterPrice ()