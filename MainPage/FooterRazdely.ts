import { expect, type Locator, type Page } from '@playwright/test';

export class FooteRazdely {
	page: Page;
	title: Locator;
	glavnaya: Locator;
	tvChannel: Locator;
	movie: Locator;
	serials: Locator;
	glavnayaHref: string;
	tvChannelHref: string;
	movieHref: string;
	serialsHref: string;
	glavnayaURL: string;
	tvChannelURL: string;
	movieURL: string;
	serialsURL: string;

	constructor(page: Page) {
		this.title = page.locator('//p[@title=" Разделы"]');
		this.glavnaya = page.getByTitle(' Главная');
		page.locator('//a[@title=" Главная"]');
		this.tvChannel = page.getByTitle('ТВ', { exact: true });
		//page.locator('//a[@title="ТВ"]');
		this.movie = page.getByTitle(' Фильмы');
		// page.locator('//a[@title=" Фильмы"]');
		this.serials = page.getByTitle(' Сериалы');
		// page.locator('//a[@title=" Сериалы"]');
		this.glavnayaHref = '/';
		this.tvChannelHref = '/tv';
		this.movieHref = '/video';
		this.serialsHref = '/video/series';
		this.glavnayaURL = 'https://kion.ru/';
		this.tvChannelURL = 'https://kion.ru/tv';
		this.movieURL = 'https://kion.ru/video';
		this.serialsURL = 'https://kion.ru/video/series';
	}

	async checkFooterRazdelyVisible() {
		await this.title.waitFor();
		await expect(this.title).toBeVisible();
		await expect(this.glavnaya).toBeVisible();
		await expect(this.glavnaya).toHaveAttribute('href', this.glavnayaHref);
		await expect(this.tvChannel).toBeVisible();
		await expect(this.tvChannel).toHaveAttribute('href', this.tvChannelHref);
		await expect(this.movie).toBeVisible();
		await expect(this.movie).toHaveAttribute('href', this.movieHref);
		await expect(this.serials).toBeVisible();
		await expect(this.serials).toHaveAttribute('href', this.serialsHref);
	}

	async checkFooterRazdelyLinks() {
		// await this.tvChannel.waitFor();
		// await this.tvChannel.click();
		// await this.page.waitForURL('https://kion.ru/tv');
		//await this.page.waitForTimeout(3000);
		await this.glavnaya.click();
		await this.page.waitForURL(this.glavnayaURL);
		await this.movie.click();
		await this.page.waitForURL(this.movieURL);
		await this.serials.click();
		await this.page.waitForURL(this.serialsURL);
	}
}
