import SignUpPage from './../pages/github.signup.page.js';
import MainPage from './../pages/github.main.page.js';
import EnterPrice from './../pages/github.enterprice.page.js';
import ResourcesGitHub from './../pages/resources.github.js';
import SearchPage from './../pages/github.search.page.js';
import PricingPage from './../pages/github.page.pricing.js'
import { Key } from 'webdriverio'

describe("GitHubTestCase1", () => {

    it("Test case 1: SignUp Page", async () => {
        await browser.reloadSession();
        await browser.url('https://github.com');

        await MainPage.clickOnSignUpBtn();

        await SignUpPage.isClickableEmailInput();
        await SignUpPage.setEmailInput('superemail@super.email');
        await SignUpPage.isClickableContinueBtn1();
        await SignUpPage.clickContinueBtn1();

        await SignUpPage.setPasswordInput('superpasswordsuperpassword');
        await SignUpPage.isClickableContinueBtn2();
        await SignUpPage.clickContinueBtn2();

        await SignUpPage.setLoginInput('SuperNickSuperLogin');
        await SignUpPage.isClickableContinueBtn3();
         await SignUpPage.clickContinueBtn3();

        await SignUpPage.setReceiveInput('y');
        await SignUpPage.isClickableContinueBtn4();
        await SignUpPage.clickContinueBtn4()
        await browser.reloadSession();

    });

    it("test case 2: Enter Price Page", async () => {
        await browser.reloadSession();
        await browser.url('https://github.com');

        await MainPage.thePlaceH2.scrollIntoView();
        await MainPage.expectViewThePlaceH2();
        await MainPage.expectViewEnterPriceBtn3();
        await MainPage.clickOnEnterPriceBtn3();

        await EnterPrice.expectViewTrialPlan();
        await EnterPrice.clickOnEnterpriceCloud();
        await browser.reloadSession();

    });

    it("test case 3: Subscribe", async () => {
        await browser.reloadSession();
        await browser.url('https://github.com');
        await MainPage.scrollToSubscribeBtn();
        await MainPage.expectViewSubscribeBtn();
        await MainPage.expectClickableSubscribeBtn();
        await MainPage.clickOnSubscribeBtn();
        await ResourcesGitHub.checkBrowserUrl();
        await ResourcesGitHub.expectViewResourcesSubscribe();
        await ResourcesGitHub.scrollToEmailInput();
        await ResourcesGitHub.setEmailInput("SuperEmail@super.email");
        await ResourcesGitHub.clickCountryBtn();
        await ResourcesGitHub.selectCountryUA();
        await ResourcesGitHub.clickOnCheckBox();
        await ResourcesGitHub.clickOnSubmitBtn();
        await ResourcesGitHub.expectViewTextSubscribing()
        await browser.reloadSession();
        
    });


    it("test case 4: Search Results", async () => {
        
        await browser.url('https://github.com');
        await browser.maximizeWindow();
        await MainPage.clickOnSearchBtn();
        await MainPage.addSearchInput('act')
        await browser.keys([Key.Enter]);
        await SearchPage.checkcard1()
        await SearchPage.checkcard2()
        await SearchPage.checkcard3()
        await SearchPage.checkcard4()
        await SearchPage.checkcard5()
        await SearchPage.checkcard6()
        await SearchPage.checkcard7()
        await SearchPage.checkcard8()
        await SearchPage.checkcard9()
        await SearchPage.checkcard10()
        await browser.reloadSession();
    });

    it("test case 5: Compare", async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com');
        await MainPage.clickOnPricingBtn();
        await PricingPage.expectViewPricingTextH1();
        await browser.pause(2000);
        await PricingPage.scrollToCompareBtn();
        await browser.pause(2000);
        await PricingPage.clickOnCompareBtn();
        await browser.pause(2000);
        await PricingPage.scrollToCompareTextH1();
        await browser.pause(2000);
        await PricingPage.expectViewCompareTextH1();
        
    });

});