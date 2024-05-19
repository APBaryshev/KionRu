// poster-block.ts

import { Locator, Page } from '@playwright/test';

// Определение интерфейса для информации о постерах
interface PosterInfo {
	href: string;
	posterSrc: string;
	title: string;
	subtitles: string;
	rating: string;
}

export class PosterBlock {
	private page: Page;
	private baseSelector: string;
	title: Locator;
	arrowLeft: Locator;
	arrowRight: Locator;
	posters: Locator;

	constructor(page: Page, baseSelector: string) {
		this.page = page;
		this.baseSelector = baseSelector;
		this.title = page.locator(`${baseSelector} .ui-row-title`);
		this.arrowLeft = page.locator(`${baseSelector} .ui-row-arrow-left`);
		this.arrowRight = page.locator(`${baseSelector} .ui-row-arrow-right`);
		this.posters = page.locator(`${baseSelector} .ui-row-content-container .web-row-item`);
	}

	async getTitle() {
		return this.title.textContent();
	}

	async getPosterCount() {
		return this.posters.count();
	}

	async getAllPostersInfo() {
		const postersCount = await this.getPosterCount();
		const postersInfo: PosterInfo[] = [];

		for (let i = 0; i < postersCount; i++) {
			const posterLocator = this.posters.nth(i);
			const href = (await posterLocator.getAttribute('href')) ?? '';
			const posterSrc = (await posterLocator.locator('.cover-background-image').getAttribute('src')) ?? '';
			const title = (await posterLocator.locator('h2.ui-row-title').textContent()) ?? '';
			const subtitles = (await posterLocator.locator('p.text-nowrap').textContent()) ?? '';
			const rating = (await posterLocator.locator('svg-icon.starFill + span').textContent()) ?? '';
			postersInfo.push({
				href,
				posterSrc,
				title,
				subtitles,
				rating,
			});
		}

		return postersInfo;
	}
}
