// features/step_definitions/example.steps.js

const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { chromium } = require('playwright');

let page;
let browser;

Given('I visit the example page', async function () {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('https://example.com');
});

Then('I should see the title {string}', async function (expectedTitle) {
    const title = await page.title();
    expect(title).to.equal(expectedTitle);
    await browser.close();
});
