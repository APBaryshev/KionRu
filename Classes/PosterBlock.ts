import { Page, Locator } from '@playwright/test';

class PosterBlock {
	// Локаторы для элементов блока
	readonly title: Locator;
	readonly link: Locator;
	readonly poster: Locator;
	readonly starIcon: Locator;
	readonly rating: Locator;
	readonly type: Locator;
	readonly arrowLeft: Locator;
	readonly arrowRight: Locator;

	constructor(page: Page, baseSelector: string) {
		this.title = page.locator(`${baseSelector} .ui-row-title`);
		this.link = page.locator(`${baseSelector} .ui-row-overflow-container a`);
		this.poster = page.locator(`${baseSelector} .cover-background-image`);
		this.starIcon = page.locator(`${baseSelector} [name="starFill"]`);
		this.rating = page.locator(`${baseSelector} .second-line`);
		this.type = page.locator(`${baseSelector} .access-type`);
		this.arrowLeft = page.locator(`${baseSelector} .ui-row-arrow-left`);
		this.arrowRight = page.locator(`${baseSelector} .ui-row-arrow-right`);
	}

	async getTitle() {
		return this.title.textContent();
	}

	async getRating() {
		return this.rating.textContent();
	}

	async getType() {
		return this.type.textContent();
	}

	async navigateToLink() {
		await this.link.click();
	}
}
