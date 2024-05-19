import { test, expect, Page, Locator } from '@playwright/test';
import { PosterBlock } from '../Classes/PosterBlock';

test('Тестирование постерных блоков', async ({ page }) => {
	await page.goto('https://example.com');

	// Создание экземпляра класса для первого блока
	const firstBlock = new PosterBlock(page, 'ui-web-row[data-row="last-visited"]:first-of-type');
	await firstBlock.navigateToLink(); // Переход по ссылке
	const firstBlockTitle = await firstBlock.getTitle(); // Получение заголовка
	console.log(`Заголовок первого блока: ${firstBlockTitle}`);

	// Проверка рейтинга и типа первого блока
	const firstBlockRating = await firstBlock.getRating();
	console.log(`Рейтинг первого блока: ${firstBlockRating}`);
	const firstBlockType = await firstBlock.getType();
	console.log(`Тип первого блока: ${firstBlockType}`);

	// Создание экземпляра класса для второго блока
	const secondBlock = new PosterBlock(page, 'ui-web-row[id="glo_shelf_blender_1651"]');
	await secondBlock.navigateToLink(); // Переход по ссылке
	const secondBlockTitle = await secondBlock.getTitle(); // Получение заголовка
	console.log(`Заголовок второго блока: ${secondBlockTitle}`);

	// Проверка рейтинга и типа второго блока
	const secondBlockRating = await secondBlock.getRating();
	console.log(`Рейтинг второго блока: ${secondBlockRating}`);
	const secondBlockType = await secondBlock.getType();
	console.log(`Тип второго блока: ${secondBlockType}`);
});
