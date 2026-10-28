import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class searchResultsPage extends BasePage
{
    private readonly searchHeader: Locator;
    private readonly searchResults:Locator; 

    constructor(page:Page)
    {
        super(page);
        this.searchHeader = page.locator("h1");
        this.searchResults = page.locator("div.product-thumb"); 
    }

    async getSearchResultsPageHeader():Promise<string>
    {
       return await this.searchHeader.innerText();
    }

    async getResultsCount():Promise<number>
    {
       return  await this.searchResults.count();
    }

    async selectAndClick(productName:string):Promise<void>
    {
        await this.page.locator(`//a[text()="${productName}"]`).click();
    }
}