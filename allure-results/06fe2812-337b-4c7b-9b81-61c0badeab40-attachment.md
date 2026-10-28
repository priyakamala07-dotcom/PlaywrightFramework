# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homePage.spec.ts >> Test Header of HomePage
- Location: tests/homePage.spec.ts:9:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "My Account"
Received: "Account Login"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - list [ref=e6]:
        - listitem [ref=e7]:
          - link "$ Currency " [ref=e10] [cursor=pointer]:
            - /url: "#"
            - strong [ref=e11]: $
            - text: Currency
            - generic [ref=e12]: 
        - listitem
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link " +91 98765 43210" [ref=e16] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - generic [ref=e17]: 
            - text: +91 98765 43210
        - listitem [ref=e18]:
          - link " My Account " [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
            - text: My Account
            - generic [ref=e22]: 
        - listitem [ref=e23]:
          - link " Wish List (0)" [ref=e24] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - generic [ref=e25]: 
            - text: Wish List (0)
        - listitem [ref=e26]:
          - link " Shopping Cart" [ref=e27] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/cart
            - generic [ref=e28]: 
            - text: Shopping Cart
        - listitem [ref=e29]:
          - link " Checkout" [ref=e30] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/checkout
            - generic [ref=e31]: 
            - text: Checkout
  - banner [ref=e32]:
    - generic [ref=e34]:
      - link [ref=e37] [cursor=pointer]:
        - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - img "NLTECH Trainings Hub" [ref=e38]
      - generic [ref=e40]:
        - textbox "Search" [ref=e41]
        - button "" [ref=e42] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=e46] [cursor=pointer]:
        - generic [ref=e47]: 
        - text: 0 item(s) - $0.00
  - main [ref=e48]:
    - navigation [ref=e50]:
      - text: 
      - list [ref=e52]:
        - listitem [ref=e53]:
          - link "Desktops" [ref=e54] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/desktops
        - listitem [ref=e55]:
          - link "Laptops & Notebooks" [ref=e56] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/laptop-notebook
        - listitem [ref=e57]:
          - link "Components" [ref=e58] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/component
        - listitem [ref=e59]:
          - link "Tablets" [ref=e60] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/tablet
        - listitem [ref=e61]:
          - link "Software" [ref=e62] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/software
        - listitem [ref=e63]:
          - link "Phones & PDAs" [ref=e64] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/smartphone
        - listitem [ref=e65]:
          - link "Cameras" [ref=e66] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/cameras
        - listitem [ref=e67]:
          - link "MP3 Players" [ref=e68] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/mp3-players
    - generic [ref=e69]:
      - list [ref=e70]:
        - listitem [ref=e71]:
          - link "" [ref=e72] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - listitem [ref=e74]:
          - link "Account" [ref=e75] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
        - listitem [ref=e76]:
          - link "Login" [ref=e77] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/login
      - generic [ref=e78]:
        - generic [ref=e80]:
          - generic [ref=e82]:
            - heading "New Customer" [level=2] [ref=e83]
            - paragraph [ref=e84]:
              - strong [ref=e85]: Register Account
            - paragraph [ref=e86]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
            - link "Continue" [ref=e88] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/register
          - generic [ref=e91]:
            - heading "Returning Customer" [level=2] [ref=e92]
            - paragraph [ref=e93]:
              - strong [ref=e94]: I am a returning customer
            - generic [ref=e95]:
              - generic [ref=e96]: E-Mail Address
              - textbox "E-Mail Address" [ref=e97]: k123@gmail.com
            - generic [ref=e98]:
              - generic [ref=e99]: Password
              - textbox "Password" [ref=e100]: 123@123
              - link "Forgotten Password" [ref=e101] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/forgotten
            - generic [ref=e102]:
              - button "" [disabled]
        - complementary [ref=e103]:
          - generic [ref=e104]:
            - link "Login" [ref=e105] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/login
            - link "Register" [ref=e106] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/register
            - link "Forgotten Password" [ref=e107] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/forgotten
            - link "My Account" [ref=e108] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
            - link "Payment Methods" [ref=e109] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/payment_method
            - link "Address Book" [ref=e110] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/address
            - link "Wish List" [ref=e111] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - link "Order History" [ref=e112] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order
            - link "Downloads" [ref=e113] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/download
            - link "Subscriptions" [ref=e114] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/subscription
            - link "Reward Points" [ref=e115] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/reward
            - link "Returns" [ref=e116] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns
            - link "Transactions" [ref=e117] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/transaction
            - link "Newsletter" [ref=e118] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter
  - contentinfo [ref=e119]:
    - generic [ref=e120]:
      - generic [ref=e121]:
        - generic [ref=e122]:
          - heading "Information" [level=5] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Terms & Conditions" [ref=e126] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/terms
            - listitem [ref=e127]:
              - link "Delivery Information" [ref=e128] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/delivery
            - listitem [ref=e129]:
              - link "About Us" [ref=e130] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/about-us
            - listitem [ref=e131]:
              - link "Privacy Policy" [ref=e132] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/privacy
        - generic [ref=e133]:
          - heading "Customer Service" [level=5] [ref=e134]
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "Contact Us" [ref=e137] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - listitem [ref=e138]:
              - link "Returns" [ref=e139] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns.add
            - listitem [ref=e140]:
              - link "Site Map" [ref=e141] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/sitemap
        - generic [ref=e142]:
          - heading "Extras" [level=5] [ref=e143]
          - list [ref=e144]:
            - listitem [ref=e145]:
              - link "Brands" [ref=e146] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/brands
            - listitem [ref=e147]:
              - link "Affiliate" [ref=e148] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/affiliate
            - listitem [ref=e149]:
              - link "Specials" [ref=e150] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=product/special
        - generic [ref=e151]:
          - heading "My Account" [level=5] [ref=e152]
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "My Account" [ref=e155] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
            - listitem [ref=e156]:
              - link "Order History" [ref=e157] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order
            - listitem [ref=e158]:
              - link "Wish List" [ref=e159] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - listitem [ref=e160]:
              - link "Newsletter" [ref=e161] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter
      - separator [ref=e162]
      - paragraph [ref=e163]:
        - text: Powered By
        - link "OpenCart" [ref=e164] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: NLTECH Trainings Hub © 2026
```

# Test source

```ts
  1  | import { test, expect } from '../src/fixtures/pageFixtures.js'
  2  | 
  3  | 
  4  | test.beforeEach(async ({ loginpage }) => {
  5  |     await loginpage.goToLoginPage();
  6  |     await loginpage.doLogin("k123@gmail.com", '123@123');
  7  | })
  8  | 
  9  | test("Test Header of HomePage", async({homepage})=>{
  10 |     let hometitie: string = await homepage.getHomePageTitile();
> 11 |     expect(hometitie).toBe("My Account");
     |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  12 | })
  13 | 
  14 | test("Logout link Test", async ({ homepage }) => {
  15 | 
  16 |     let isLogoutLink = await homepage.isLogoutLinkAvailable();
  17 |     expect(isLogoutLink).toBe(true);
  18 | })
  19 | 
  20 | test("getHomePageHeaders", async({homepage})=>{
  21 |     let homePageHeaders = await homepage.getHeaders();
  22 |     expect(homePageHeaders).toHaveLength(3);
  23 |     expect.soft(homePageHeaders).toEqual(['My Orders','My Affiliate Account','Newsletter']);
  24 | })
  25 | 
  26 | 
  27 | 
```