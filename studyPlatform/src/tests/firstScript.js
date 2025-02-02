import { Builder, By, until, Browser } from 'selenium-webdriver';
import assert from "assert";


(async function testLogin() {

    // Start the browser session
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();

    try {
        // Navigate to your application's login page
        await driver.get('http://localhost:5173'); // Update with the correct URL when navigation works properly.

        // Wait until the VILO text is visible (just as an example)
        await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'VILO')]")), 10000);

        // Find the email field and enter a value
        let emailField = await driver.findElement(By.xpath("//input[@type='text']"));
        await emailField.sendKeys('test@example.com');

        // Find the password field and enter a value
        let passwordField = await driver.findElement(By.name('password'));
        await passwordField.sendKeys('password');

        // Click the "Remember me" checkbox
        let rememberMeCheckbox = await driver.findElement(By.xpath("//input[@type='checkbox']"));
        await rememberMeCheckbox.click();

        // Click the login button
        let loginButton = await driver.findElement(By.xpath("//button[contains(text(),'Kirjaudu sisään')]"));
        await loginButton.click();

        // Optionally, wait for navigation or some result

        console.log("Login test passed!");

    } catch (error) {
        console.error("Login test failed!", error);
    } finally {
        // Quit the browser session
        await driver.quit();
    }
})();