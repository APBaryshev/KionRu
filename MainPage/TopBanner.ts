import { expect, type Locator, type Page } from '@playwright/test';

export class TopBanner {
	page: Page;
	bannerImg: Locator;
	bannerSrcText: string;
	bannerTitle: Locator;
	bannerSubTitle: Locator;
	bannerColoredText: Locator;
	bannerButton: Locator;
	bannerDescription: Locator;

	constructor(page: Page) {
		this.page = page;
		this.bannerImg = page.locator('//img[@alt="Баннер"]');
		this.bannerSrcText = 'https://static.kion.ru/kds/neaz_banner/base0124/banner_base_0124_xl.webp';
		this.bannerTitle = page.getByText('Мир историй и эксклюзивов').nth(1);
		//XPATH'//div[@class="banner__content"]//p[@class="banner__title"]'
		this.bannerSubTitle = page.getByText('Фильмы, сериалы и телеканалы в одной подписке с МТС Premium').nth(1);
		this.bannerColoredText = page.getByText('месяца за 249 ₽').nth(1);
		//XPATH'//div[@class="banner__content"]//p[@class="banner__sub-title"]'
		this.bannerButton = page.getByRole('button', { name: 'Оформить подписку' }).nth(1);
		//XPATH'//div[@class="banner__content"]//p[@class="banner__colored-text"]'
		this.bannerDescription = page.getByText('Отключить можно в любой момент').nth(1);
		//XPATH'//div[@class="banner__content"]//p[@class="banner__description"]'
	}

	async checkBannerImgIsVisible() {
		await expect(this.bannerImg).toBeVisible();
		await expect(this.bannerImg).toHaveAttribute('src', this.bannerSrcText);
	}

	async checkLinkButton() {
		await expect(this.bannerButton).toBeVisible();
		await this.bannerButton.click();
		await this.page.waitForTimeout(4000);
	}
}
