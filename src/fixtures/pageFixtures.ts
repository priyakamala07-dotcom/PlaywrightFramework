import { test as baseTest } from '@playwright/test';
import { loginPage } from '../pages/loginPage.js';
import { homePage } from '../pages/homePage.js';
import { searchResultsPage } from '../pages/searchResultsPage.js';

//defining types for page fixtures

type pageFixtures = {
    loginpage: loginPage;
    homepage: homePage;
    searchresultspage:searchResultsPage;
}


export let test = baseTest.extend<pageFixtures>({

    loginpage: async ({ page }, use) => {
        let loginpage = new loginPage(page);
        await use(loginpage);
    },

    homepage: async ({ page }, use) => {
        let homepage = new homePage(page);
        await use(homepage);
    },

    searchresultspage: async ({ page }, use) => {
        let searchresultspage = new searchResultsPage(page);
        await use(searchresultspage);
    }

});

export { expect } from '@playwright/test';