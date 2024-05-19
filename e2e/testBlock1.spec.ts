import { PosterBlock } from '../Classes/PosterBloсk1';
import { expect, test, Browser, BrowserContext } from '@playwright/test';
import { Header } from '../MainPage/Header';
import { chromium } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let header: Header;
// let posterblock1: PosterBlock;

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


test('постеры на главной странице', async ({ page }) => {
  // Перейти на страницу, содержащую блоки постеров
  await page.goto('https://example.com/');

// Для примера используем селектор первого блока
const baseSelector = 'ui-web-row[data-content-type="vod"]:first-of-type';

const posterBlock = new PosterBlock(page, baseSelector);

// А теперь вызываем методы для этого блока
const title = await posterBlock.getTitle();
console.log(`Заголовок блока: ${title}`);

// И другие действия с posterBlock...

  //   // Выберите все блоки постеров
//   const blocks = page.locator('ui-web-row[data-content-type="vod"]');
//   const blocksCount = await blocks.count();

//   for (let i = 0; i < blocksCount; i++) {
//     // Получить локатор для каждого блока по индексу
//     const blockSelector = blocks.nth(i);

//     // Создание экземпляра класса PosterBlock
//     const posterBlock = new PosterBlock(page, blockSelector);

//     // Проведение действий и проверок для каждого блока
//     const title = await posterBlock.getTitle();
//     console.log(`Заголовок блока ${i + 1}: ${title}`);

//     const postersInfo = await posterBlock.getAllPostersInfo();
//     console.log(`Информация о постерах в блоке ${i + 1}:`, postersInfo);

//     // Пример конкретной проверки (можно адаптировать под требуемые сценарии)
//     expect(title).not.toBeNull();
//     expect(await posterBlock.getPosterCount()).toBeGreaterThan(0);

//     // ...другие проверки и действия
});