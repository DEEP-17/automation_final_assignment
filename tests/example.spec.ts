import { test, expect } from '@playwright/test';
test('test travekfika', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.travelfika.com/');
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Sign in or join using your' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('vonak40929@brixozu.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('vonak40929@brixozu.coM');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Departing from?' }).click();
  await page.getByRole('textbox', { name: 'Departing from?' }).fill('ahme');
  await page.locator('div').filter({ hasText: /^AMD - Sardar Vallabhbhai Patel International AirportAhmedabad, India$/ }).first().click();
  await page.getByRole('textbox', { name: 'Going to?' }).click();
  await page.getByRole('textbox', { name: 'Going to?' }).fill('toronto');
  await page.locator('div').filter({ hasText: /^YYZ - Lester B\. Pearson International AirportToronto, Canada$/ }).first().click();
  await page.getByRole('button', {name: 'showing selected date'}).click();
  await expect(page.locator(".rdp-root.p-3")).toBeVisible();
  await page.getByRole('button', { name: 'Thursday, June 18th, 2026' }).dispatchEvent('click');
  await page.getByRole('button', { name: 'Saturday, July 4th, 2026' }).nth(1).dispatchEvent('click');
  await page.getByRole('button', { name: 'Economy' }).click();
  await page.getByRole('menuitem', { name: 'Business class' }).click();
  await page.getByRole('button', { name: 'Passenger' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.locator('div:nth-child(3) > .flex.items-center.justify-between > .flex.items-center > button:nth-child(3)').click();
  await page.locator('div:nth-child(2) > .flex.items-center.justify-between > .flex.items-center > button:nth-child(3)').click();
  await page.getByRole('button', { name: 'Search' }).click();
});
test('test  flight in travekfika', async ({ page }) => {
  test.setTimeout(600000);
  //home page
  await page.goto('https://www.travelfika.com/');
  await page.getByRole('link', { name: 'Sign in or join using your' }).click();
  //login page
  await expect(page).toHaveURL('https://www.travelfika.com/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('vonak40929@brixozu.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('vonak40929@brixozu.coM');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  await page.getByRole('button', {name: 'Toggle menu'}).click();
  await page.getByRole('link', { name: 'Travel' }).click();
  // await page.pause();
  await page.locator('.flex-grow.overflow-y-auto.custom-scrollbar').locator('a[href="/flights/search"]').first().click();
  // flight booking page
  await expect(page).toHaveURL('https://www.travelfika.com/flights/search');
  await page.getByRole('tab', { name: 'One way' }).click();
  await page.getByRole('textbox', { name: 'Departing from?' }).click();
  await page.getByRole('textbox', { name: 'Departing from?' }).fill('ahme');
  await page.locator('div').filter({ hasText: /^AMD - Sardar Vallabhbhai Patel International AirportAhmedabad, India$/ }).first().click();
  await page.getByRole('textbox', { name: 'Going to?' }).click();
  await page.getByRole('textbox', { name: 'Going to?' }).fill('toronto');
  await page.locator('div').filter({ hasText: /^YYZ - Lester B\. Pearson International AirportToronto, Canada$/ }).first().click();
  await page.locator('#date').click();
  // await expect(page.locator(".rdp-root.p-3")).toBeVisible();
  await page.getByRole('button', { name: 'Thursday, June 18th, 2026' }).dispatchEvent('click');
  // await page.getByRole('button', { name: 'Saturday, July 4th, 2026' }).nth(1).dispatchEvent('click');
  await page.getByRole('button', { name: 'Economy' }).click();
  await page.getByRole('menuitem', { name: 'Business class' }).click();
  await page.getByRole('button', { name: 'Passenger' }).click();
  await page.getByRole('button', { name: 'Increase adults' }).click();
  await page.getByRole('button', { name: 'Increase children' }).click();
  await page.getByRole('button', { name: 'Increase infants' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  //flight listing page
  //https://www.travelfika.com/flights/listing-flights/%7B%22Airport_Code%22:%22AMD%22,%22Airport_Name%22:%22Sardar%20Vallabhbhai%20Patel%20International%20Airport%22,%22City_name%22:%22Ahmedabad%22,%22Country_Name%22:%22India%22%7D/%7B%22Airport_Code%22:%22YYZ%22,%22Airport_Name%22:%22Lester%20B.%20Pearson%20International%20Airport%22,%22City_name%22:%22Toronto%22,%22Country_Name%22:%22Canada%22%7D/One%20way/2/1/1/Business%20class/18-Jun-2026/0/0
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
  await page.locator('span', { hasText: '2 Stop' }).dispatchEvent('click');;  
  await page.waitForTimeout(3000);
  // await page.waitForLoadState('networkidle');
  const slider = page.locator('.rc-slider').first();
  const box = await slider.boundingBox();
  if (box) {
      await page.mouse.move(box.x + 5,box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + box.width * 0.3,box.y + box.height / 2,{ steps: 20 });
      await page.mouse.up();
  }
  await page.waitForTimeout(3000);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
  // await page.pause();
  await page.locator('[id="Air Canada"]').click();

  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Sort by : Price (low to high)' }).click();
  await page.locator('span').filter({ hasText: 'Arrival (earliest)' }).click();
  // await page.locator('.flex.flex-col.gap-4').;
  await page.locator(`div.flex > section.flex > div.flex`).first().click();
  // await page.locator(`div.space-y-3 > section.flex > div.hidden`).first().click();
  // await page.locator('.fixed.h-full').getByRole('button', { name: 'Select', exact: true }).first().click();
  //trip summary page
  // https://www.travelfika.com/flights/trip-summary/72383/1807dc4955a845ecb5f9f50984f0b40e/%7B%22NoOfAdult%22:%7B%22Count%22:2%7D,%22NoOfChildren%22:%7B%22Count%22:1%7D,%22NoOfInfant%22:%7B%22Count%22:1%7D%7D/0
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Continue to Checkout' }).waitFor
({ state: 'visible' });
  await page.getByRole('button', { name: 'Continue to Checkout' }).click();

  await page.locator(`u:has-text("Click here")`).click();
  await page.waitForLoadState('domcontentloaded');
  //seat map page
  //https://www.travelfika.com/flights/seat-map/72383/fad6d8e055834603a96b23ecc1f596d2/%7B%22NoOfAdult%22:%7B%22Count%22:1%7D,%22NoOfChildren%22:%7B%22Count%22:0%7D,%22NoOfInfant%22:%7B%22Count%22:0%7D%7D/0
  // await page.pause();
  // page.locator(`div.mb-40 > div.flex > div.flex`).first().getByRole('button', { name: /Flight/i });
  const flights = page.locator(`div.mb-40 > div.flex > div.flex`).first().getByRole('button', { name: /Flight/i });
  await flights.first().waitFor({ state: 'visible' });
  for (let i = 0; i < await flights.count(); i++) {
    await flights.nth(i).click();
    const noSeat = page.getByRole('heading', { name: 'Seat booking is not available for this flight', level: 4 });

    if (!(await noSeat.isVisible().catch(() => false))) {
      console.log(`Found available seat in Flight ${i + 1}`);
      break;
    }
  }
  await page.locator('label').first().click();
  await page.getByRole('button', { name: 'Skip/Move to Checkout...' }).click();
  //traveller info page
  //https://www.travelfika.com/flights/travellerinfo/72383/fad6d8e055834603a96b23ecc1f596d2/%7B%22NoOfAdult%22:%7B%22Count%22:1%7D,%22NoOfChildren%22:%7B%22Count%22:0%7D,%22NoOfInfant%22:%7B%22Count%22:0%7D%7D/0
  await page.getByText('Passenger Detail #4INFANT(').waitFor({ state: 'visible' });
  // await page.locator('input[name="firstName1"]').waitFor({ state: 'visible' });
  // await page.locator('input[name="firstName1"]').fill('John');
  // await page.locator('input[name="middleName1"]').fill('M');
  // await page.locator('input[name="lastName1"]').fill('Doe');
  // // await page.locator('button[role="combobox"]').first().click();
  // // await page.locator('input[name="country"]').pressSequentially('India');
  // // await page.locator('[aria-label="Suggestions"]').filter({   hasText: 'Indonesia' }).click();
  // await page.locator('input[name="DOB1"]').click();
  // await page.locator('input[name="DOB1"]').fill('2004-11-14');
  // // await page.locator('input[name="DOB1"]').fill('1990-01-01');
  // await page.getByRole('combobox').nth(1).click();
  // await page.getByRole('option', { name: 'Male' ,exact:true }).click();
    for (let i = 1; ; i++) {
    const firstName = page.locator(`input[name="firstName${i}"]`);

    if (!(await firstName.isVisible().catch(() => false))) {
      break;
    }

    await firstName.fill('John');
    await page.locator(`input[name="middleName${i}"]`).fill('Moris');
    await page.locator(`input[name="lastName${i}"]`).fill('Doe');

    await page.locator(`input[name="DOB${i}"]`).fill('2004-11-14');

    await page.getByRole('combobox').nth(i * 2 - 1).click();
    await page.getByRole('option', { name: 'Male', exact: true }).click();

    console.log(`Passenger ${i} filled`);
  }
  await page.locator('input[name="adress"]').fill('123 Main St, Anytown, USA');
  await page.locator('input[name="zipcode"]').fill('382531');
  await page.locator('input[name="city"]').fill('Anytown');
  await page.locator('input[name="email"]').fill('vonak40929@brixozu.com');
  await page.locator('input[name="phone"]').fill('9512345678');
  // await page.pause();
});
test('test hotel in travekfika', async ({ page }) => {
  test.setTimeout(600000);
  await page.goto('https://www.travelfika.com/');
  // await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Sign in or join using your' }).click();
  await expect(page).toHaveURL('https://www.travelfika.com/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('vonak40929@brixozu.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('vonak40929@brixozu.coM');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  // await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  await page.getByRole('button', {name: 'Toggle menu'}).click();
  await page.getByRole('link', { name: 'Travel' }).click();
  // await page.pause();
  await page.locator('.flex-grow.overflow-y-auto.custom-scrollbar').locator('a[href="/hotel/search"]').first().click();
  await expect(page).toHaveURL('https://www.travelfika.com/hotel/search');
  // await page.getByRole('textbox', { name: 'What hotel you looking for?' }).click();
  // 1. Clear the field first (optional but safe)
  await page.getByRole('textbox', { name: 'What hotel you looking for?' }).clear();

  // 2. Type like a human to ensure the site's autocomplete API is triggered
  await page.getByRole('textbox', { name: 'What hotel you looking for?' }).pressSequentially('hyderabad', { delay: 150 });

  // 3. Target the dropdown option without the strict start/end anchors
  const suggestion = page.locator('div').filter({ hasText: /HYD, Hyderabad, India/i }).first();

  // 4. Explicitly wait for the API to load the dropdown before clicking
  await suggestion.waitFor({ state: 'visible', timeout: 30000 });
  await suggestion.click();

  // 3. Explicitly wait for the API to return results and the UI to render the dropdown
  // await suggestion.waitFor({ state: 'visible', timeout: 30000 });

  // 4. Click the suggestion
  // await suggestion.click();
  await page.getByRole('button', { name: 'showing selected date' }).click();
  await page.getByRole('button', { name: 'Thursday, June 18th,' }).click();
  await page.getByRole('button', { name: 'Friday, June 26th,' }).click();
  await page.getByRole('button', { name: 'Room, 1 Guest' }).click();
  await page.getByRole('button', { name: 'Increase adults' }).click();
  await page.getByRole('button', { name: 'Increase children' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.flex.w-full.flex-col.items-start.justify-start').first().waitFor({ state: 'visible' });

    const [hotelPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('.flex.w-full.flex-col.items-start.justify-start')
      .first()
      .getByText('Minerva Grand Secundrabad See us on mapSarojini Devi Road, SecunderabadRanking')
      .first()
      .click()
  ]);
  await hotelPage.getByRole('button', { name: 'Book Now' }).first().click();
  await hotelPage.waitForLoadState('networkidle');
  const priceError = hotelPage.getByText(
    'Sorry, There is a problem in checking price!',
    { exact: true }
  );

  if (await priceError.isVisible().catch(() => false)) {
    console.log('Price check failed. Skipping passenger details.');

    await hotelPage.getByRole('button', { name: '×' }).click();
    return;
  }
  await hotelPage.getByRole('textbox', { name: 'Ex. John' }).fill('John');
  await hotelPage.getByRole('textbox', { name: 'Ex. Smith' }).fill('Smith');
  await hotelPage.getByRole('textbox', { name: 'Ex. 35' }).fill('35');

  await hotelPage
    .getByRole('combobox')
    .filter({ hasText: 'Select your gender' })
    .click();

  await hotelPage.getByRole('option', {
    name: 'Male',
    exact: true
  }).click();

  await hotelPage.locator('input[name="adress"]').fill('123 Main St, Anytown, USA');
  await hotelPage.locator('input[name="zipcode"]').fill('382531');
  await hotelPage.locator('input[name="city"]').fill('Anytown');
  await hotelPage.locator('input[name="email"]').fill('vonak40929@brixozu.com');
  await hotelPage.locator('input[name="phone"]').fill('9512345678');
  // await page.pause();
//  await page.locator('label[for="remark"]').click();
});
test('test', async ({ page }) => {
    test.setTimeout(600000);
  await page.goto('https://www.travelfika.com/hotel/search');
  await page.getByRole('textbox', { name: 'What hotel you looking for?' }).click();
  await page.getByRole('textbox', { name: 'What hotel you looking for?' }).fill('hydera');
  await page.locator('div').filter({ hasText: /^HYD, Hyderabad, India$/ }).click();
  await page.getByRole('button', { name: 'Room, 1 Guest' }).click();
  await page.getByRole('button', { name: 'Increase adults' }).click();
  await page.getByRole('button', { name: 'Increase children' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Minerva Grand Secundrabad See us on mapSarojini Devi Road, SecunderabadRanking').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Book Now' }).click();
  await page1.getByRole('button', { name: '×' }).click();
});
test('temp test', async ({ page }) => {
  await page.goto('https://www.travelfika.com/hotel/search');
  await page.getByRole('textbox', { name: 'What hotel you looking for?' }).click();
  await page.getByRole('textbox', { name: 'What hotel you looking for?' }).fill('hyderabad');
  await page.locator('div').filter({ hasText: /^HYD, Hyderabad, India$/ }).click();
  await page.getByRole('button', { name: 'showing selected date' }).click();
  await page.getByRole('button', { name: 'Thursday, June 18th,' }).click();
  await page.getByRole('button', { name: 'Friday, June 26th,' }).click();
  await page.getByRole('button', { name: 'Room, 1 Guest' }).click();
  await page.getByRole('button', { name: 'Increase adults' }).click();
  await page.getByRole('button', { name: 'Increase children' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
});

