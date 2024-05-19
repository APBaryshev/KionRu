import { Locator, Page } from '@playwright/test';

class PosterBlock {
  readonly title: Locator;
  readonly link: Locator;
  readonly poster: Locator;
  readonly posterCaption: Locator;
  readonly starIcon: Locator;
  readonly rating: Locator;
  readonly type: Locator; // Подписка, Бесплатно, Покупка
  readonly arrowLeft: Locator;
  readonly arrowRight: Locator;

  constructor(public page: Page, public baseSelector: string) {
    this.title = this.page.locator(`${baseSelector} .title-selector`);
    this.link = this.page.locator(`${baseSelector} a.link-selector`);
    this.poster = this.page.locator(`${baseSelector} .poster-selector`);
    this.posterCaption = this.page.locator(`${baseSelector} .poster-caption-selector`);
    this.starIcon = this.page.locator(`${baseSelector} .star-icon-selector`);
    this.rating = this.page.locator(`${baseSelector} .rating-selector`);
    this.type = this.page.locator(`${baseSelector} .type-selector`);
    this.arrowLeft = this.page.locator(`${baseSelector} .arrow-left-selector`);
    this.arrowRight = this.page.locator(`${baseSelector} .arrow-right-selector`);
  }

  // Метод для получения текста заголовка
  async getTitleText() {
    return await this.title.textContent();
  }

  // Метод для клика по ссылке
  async clickLink() {
    await this.link.click();
  }

  // ... Другие методы для взаимодействия с элементами блока
}

export { PosterBlock };