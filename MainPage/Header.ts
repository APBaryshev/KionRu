import { expect, type Locator, type Page } from '@playwright/test';

export class Header {
	page: Page;
	cookiePopup: Locator;
	cookieBtn: Locator;
	cookieText: string;
	header: Locator;
	logo: Locator;
	glavnaya: Locator;
	tvChannels: Locator;
	movie: Locator;
	serials: Locator;
	search: Locator;
	login: Locator;

	constructor(page: Page) {
		this.page = page;
		this.cookiePopup = page.locator('ui-web-alert');
		this.cookieText = 'Продолжая использовать сайт, вы принимаете политику обработки файлов cookie';
		this.cookieBtn = page.getByRole('button', { name: 'Принимаю' });
		this.header = page.locator('web-header');
		this.logo = page.getByRole('link', { name: 'KION', exact: true });
		this.glavnaya = page.locator('web-header').getByRole('link', { name: 'Главная' });
		this.tvChannels = page.locator('web-header').getByRole('link', { name: 'Телеканалы' });
		this.movie = page.locator('web-header').getByRole('link', { name: 'Фильмы' });
		this.serials = page.locator('web-header').getByRole('link', { name: 'Сериалы' });
		this.search = page.getByPlaceholder('Поиск');
		this.login = page.getByRole('button', { name: 'Войти' });
	}

	async goto() {
		// await this.page.setExtraHTTPHeaders({
		// 	'User-Agent':
		// 		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
		// 	'Accept-Language': 'ru,en;q=0.9',
		// });
		await this.page.goto('https://kion.ru');
	}

	async acceptCookiesIfPopupExist() {
		if (await this.cookiePopup.isVisible()) {
			await this.cookieBtn.click();
			console.log('Cookies have been accepted');
		}
	}

	async checkHeaderVisible() {
		await expect(this.header).toBeVisible();
		await expect(this.logo).toBeVisible();
		await expect(this.glavnaya).toBeVisible();
		await expect(this.tvChannels).toBeVisible();
		await expect(this.movie).toBeVisible();
		await expect(this.serials).toBeVisible();
		await expect(this.search).toBeVisible();
		await expect(this.login).toBeVisible();
	}

	async checkLinksAction() {
		await this.tvChannels.click();
		await this.page.waitForURL('https://kion.ru/tv');
		await this.logo.click();
		await this.page.waitForURL('https://kion.ru');
		await this.movie.click();
		await this.page.waitForURL('https://kion.ru/video');
		await this.glavnaya.click();
		await this.page.waitForURL('https://kion.ru');
		await this.serials.click();
		await this.page.waitForURL('https://kion.ru/video/series');
		await this.glavnaya.click();
		await expect(this.page).toHaveURL('https://kion.ru');
		// await this.login.click();
		// await this.page.waitForTimeout(3000);
		//await expect(this.page).not.toHaveURL('https://kion.ru');
		// await expect(this.page.locator('//div[@data-test-id="enter-phone"]')).toBeVisible();
	}

	async checkSearchInput() {
		await expect(this.search).toBeEnabled();
		await this.search.click();
		await this.search.fill('text for example');
		await expect(this.search).toHaveValue('text for example');
	}
}
