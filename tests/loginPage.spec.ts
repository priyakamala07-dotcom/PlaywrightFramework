import { test, expect } from '../src/fixtures/pageFixtures.js';
import {CsvHelper} from "../src/utils/csvUtils.js";


test.beforeEach(async ({ loginpage }) => {
    await loginpage.goToLoginPage();
})

test("Login Page title Test", async ({ loginpage }) => {
    let title: String = await loginpage.getLoginPageTitle();
    expect(title).toBe("Account Login");
})

test("Forgot password link Test", async ({ loginpage }) => {

    let isForgtavailableLink = await loginpage.isForgotPwdLinkAvailable();
    expect(isForgtavailableLink).toBe(true);
})

test("do Login test", async ({ loginpage, homepage }) => {
    await loginpage.doLogin(process.env.USER_NAME!, process.env.PASSWORD!);
    let isLogoutLinkAvailable: boolean = await homepage.isLogoutLinkAvailable();
    expect.soft(isLogoutLinkAvailable).toBeTruthy();
})

let testData = CsvHelper.readCsv("src/testData/logindata.csv");

for(let data of testData)
{
    test(`Negative Login tests with Username: ${data.username} and Password: ${data.password}`, async({loginpage})=>
    {   
        await loginpage.doLogin(data.username,data.password);
        let errorMessage: string = await loginpage.getPageErrorMessage();
        expect.soft(errorMessage).toContain("No match ");
    })
}

