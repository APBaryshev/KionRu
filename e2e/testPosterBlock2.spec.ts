import {test, expect, Locator, Page } from '@playwright/test';
import { PosterBlock } from '../Classes/PosterBlock2';

test('тестирование блоков с постерами', async ({ page }) => {
  await page.goto('https://example.com/posters');

  // Создание экземпляра класса для первого блока
  const firstBlock = new PosterBlock(page, '.poster-block:first-child');
  // Взаимодействие с первым блоком
  await firstBlock.clickLink();
  // Проверка названия
  expect(await firstBlock.getTitleText()).toBe('Ожидаемый заголовок');

  // Для других блоков ты можешь использовать итерацию или другой способ идентификации
});

test('проверка всех блоков с постерами', async ({ page }) => {
  await page.goto('https://example.com/posters');

  // Находим все блоки постеров
  const blocks = page.locator('.poster-block');
  const blocksCount = await blocks.count();

  for (let i = 0; i < blocksCount; i++) {
    // Для каждого блока создаем индивидуальный экземпляр PosterBlock
    const block = new PosterBlock(page, `.poster-block:nth-child(${i + 1})`);

    // Теперь с каждым блоком можно взаимодействовать индивидуально
    const titleText = await block.getTitleText();
    console.log(`Заголовок блока ${i + 1}: ${titleText}`);

    // Пример проверки значения
    // Нужно адаптировать в соответствии с ожидаемой логикой теста
    expect(titleText).toBeDefined();

    // Можете добавить другие действия или проверки для каждого блока
  }
});