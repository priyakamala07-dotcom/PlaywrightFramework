import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class loginPage extends BasePage {
    private readonly emailID: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly forgotPwdLink: Locator;
    private readonly logo: Locator;
    private readonly warningMsg: Locator;


    constructor(page: Page) {
        super(page);
        this.emailID = page.locator('#input-email');
        this.password = page.locator('#input-password')
        this.loginBtn = page.locator("//button[text()='Login']");
        this.forgotPwdLink = page.locator("(//a[text()='Forgotten Password'])[1]");
        this.logo = page.locator('img');
        this.warningMsg = page.locator("//div[@class='alert alert-danger alert-dismissible']");
    }

    async goToLoginPage():Promise<void>
    {
        await this.page.goto('en-gb?route=account/login');
    }

    async getLoginPageTitle():Promise<String>
    {
       return await this.page.title();
    }

    async isForgotPwdLinkAvailable():Promise<Boolean>
    {
       return await this.forgotPwdLink.isVisible();
    }

    async doLogin(username:string,password:string)
    {
        await this.emailID.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();

        await this.page.waitForTimeout(2000);
    }

    async getPageErrorMessage():Promise<string>
    {
        return await this.warningMsg.innerText();
    }



}

