import { test, Browser, BrowserContext, Page } from '@playwright/test';
import { Header } from '../MainPage/Header';
import { TopBanner } from '../MainPage/TopBanner';
import { chromium } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let header: Header;
let topbanner: TopBanner;

test.beforeEach(async ({ page }) => {
	browser = await chromium.launch();
	context = await browser.newContext();
	header = new Header(page);
	topbanner = new TopBanner(page);

	await header.goto();
	await header.acceptCookiesIfPopupExist();
});

test.afterEach(async ({ page }) => {
	await page.close();
	await context.close();
	await browser.close();
});

test('checking visibility TopBanner', async ({ page }) => {
	await topbanner.checkBannerImgIsVisible();
});

test('checking links button subscribe', async ({ page }) => {
	await topbanner.checkLinkButton();
});
