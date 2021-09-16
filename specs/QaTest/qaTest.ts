import { browser } from "protractor";

describe('QA automation Tests', () => { 
    it('Go To Request Demo', () => {
        browser.get('https://www.skuvault.com/requestdemo/')

        expect(browser.getTitle()).toEqual('Request Demo | eCommerce Inventory Management Software')
    })
});