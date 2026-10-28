import { test, expect } from '../src/fixtures/pageFixtures.js';
import {CsvHelper} from "../src/utils/csvUtils.js";

test.beforeEach(async ({ loginpage }) => {
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.USER_NAME!, process.env.PASSWORD!);
})

let testdata = CsvHelper.readCsv("src/testData/productData.csv")

for(let data of testdata){
    test("Verify search Header test", async ({ homepage, searchresultspage }) => {
    await homepage.doSearch(data.searchKey);
    let searchHeader: string = await searchresultspage.getSearchResultsPageHeader();
    expect(searchHeader).toContain(data.searchKey);
})
}

test("Verify the count of searchresults", async ({ searchresultspage, homepage }) => {
    await homepage.doSearch("macbook");
    let count: number = await searchresultspage.getResultsCount();
    expect(count).toBeGreaterThan(0);
})

test("Verify Click Product Fucntionality Test", async ({ homepage, searchresultspage, page }) => {
    await homepage.doSearch("macbook");
    await searchresultspage.selectAndClick("MacBook Air");
    expect(page).toHaveTitle("MacBook Air");
})