import { test, Browser, BrowserContext } from '@playwright/test';
import { Header } from '../MainPage/Header';
import { chromium } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let header: Header;

test.beforeEach(async ({ page }) => {
	browser = await chromium.launch();
	context = await browser.newContext();
	header = new Header(page);

	await header.goto();
	await header.acceptCookiesIfPopupExist();
});

test.afterEach(async ({ page }) => {
	await page.close();
	await context.close();
	await browser.close();
});

test('checking visibility the logo and links in the header', async ({ page }) => {
	await header.checkHeaderVisible();
});

test('checking links in the header', async ({ page }) => {
	test.setTimeout(60000);
	await header.checkLinksAction();
});

test('checking search input in the header', async ({ page }) => {
	test.setTimeout(60000);
	await header.checkSearchInput();
});
