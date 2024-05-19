import { test, Browser, BrowserContext, Page } from '@playwright/test';
import { Header } from '../MainPage/Header';
import { FooteRazdely } from '../MainPage/FooterRazdely';
import { chromium } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let header: Header;
let footerRazdely: FooteRazdely;

test.beforeEach(async ({ page }) => {
	browser = await chromium.launch();
	context = await browser.newContext();
	header = new Header(page);
	footerRazdely = new FooteRazdely(page);

	await header.goto();
	await header.acceptCookiesIfPopupExist();
});

test.afterEach(async ({ page }) => {
	await page.close();
	await context.close();
	await browser.close();
});

test('checking visibility footer Razdely', async ({ page }) => {
	test.setTimeout(60000);
	await footerRazdely.checkFooterRazdelyVisible();
});

test.only('checking links footer Razdely', async ({ page }) => {
	test.setTimeout(60000);
	await footerRazdely.checkFooterRazdelyLinks();
});
