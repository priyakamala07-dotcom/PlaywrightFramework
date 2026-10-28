import { test, expect } from '../src/fixtures/pageFixtures.js'


test.beforeEach(async ({ loginpage }) => {
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.USER_NAME!, process.env.PASSWORD!);
})

test("Test Header of HomePage", async({homepage})=>{
    let hometitie: string = await homepage.getHomePageTitile();
    expect(hometitie).toBe("My Account");
})

test("Logout link Test", async ({ homepage }) => {

    let isLogoutLink = await homepage.isLogoutLinkAvailable();
    expect(isLogoutLink).toBe(true);
})

test("getHomePageHeaders", async({homepage})=>{
    let homePageHeaders = await homepage.getHeaders();
    expect(homePageHeaders).toHaveLength(3);
    expect.soft(homePageHeaders).toEqual(['My Orders','My Affiliate Account','Newsletter']);
})


