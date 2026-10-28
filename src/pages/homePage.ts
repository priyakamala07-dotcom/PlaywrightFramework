import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class homePage extends BasePage {

    private readonly headers: Locator;
    private readonly logoutLink: Locator;
    private readonly searchIcon: Locator;
    private readonly searchBar: Locator;


    constructor(page: Page) {
        super(page);
        this.headers = page.locator('h2');
        this.logoutLink = page.locator("(//a[text()='Logout'])[2]");
        this.searchIcon = page.locator("//button[@type='submit']");
        this.searchBar = page.getByPlaceholder('Search');
    }

    async getHomePageTitile():Promise<string>
    {
        return await this.page.title();
    }

    async getHeaders():Promise<string[]>
    {
        let headerList:string[] =  await this.headers.allInnerTexts();
        return headerList;
    }

    async isLogoutLinkAvailable():Promise<boolean>
    {
       return await this.logoutLink.isVisible();
    }

    async doSearch(searchText:string):Promise<void>
    {
        await this.searchBar.fill(searchText);
        await this.searchIcon.click();
    }
    

}