import { Builder, By, until, Browser, Key } from 'selenium-webdriver';
import assert from "assert";
import { title } from 'process';


(async function testLogin() {

    // Start the browser session
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();

    try {
        // Navigate to your application's home page
        await driver.get('http://localhost:5173/home');

        // Wait for the page to load

        let title = await driver.getTitle();
        console.log('title is: ' + title);
        await driver.wait(until.titleIs('Vite + React'), 5000); 

        // Check if the navigation bar is present
        let navBar = await driver.findElement(By.tagName('nav'));
        assert(navBar !== null, 'Navigation bar is not present');

        // Check for the search input field
        let searchInput = await driver.findElement(By.className('navbar-search'));
        assert(searchInput !== null, 'Search input is not present');

        // Perform a search (if applicable)
        await searchInput.sendKeys('Test search');
        await searchInput.sendKeys(Key.RETURN);

        // Wait for search results (currently nothing to be found but just in case)
        await driver.sleep(2000); 

        // Check the buttons in the in-page navigation
        const buttons = ['Kaikki', 'Kommentit', 'Ilmiannot', 'Uutiset'];
        for (let label of buttons) {
            let button = await driver.findElement(By.xpath(`//button[text()='${label}']`));
            assert(button !== null, `Button with label ${label} is not present`);
        }

        await driver.wait(until.elementsLocated(By.className('NewsCardComponent')), 10000);

        // Check that the news cards are displayed
        let newsCards = await driver.findElements(By.className('NewsCardComponent')); // Adjust the class name if needed
        console.log('num of cards: ' + newsCards.length);
        assert(newsCards.length > 0, 'No news cards found');

        // Verify the enrolled courses section
        let enrolledCoursesHeader = await driver.findElement(By.xpath("//h3[text()='Enrolled Courses']"));
        assert(enrolledCoursesHeader !== null, 'Enrolled Courses header is missing');

        let enrolledCourses = await driver.findElements(By.className("CourseCardComponent"));
        assert(enrolledCourses.length > 0, 'No enrolled courses found');

        console.log('All tests passed successfully!');

    } catch (error) {
        console.error("Home page test failed!", error);
    } finally {
        // Quit the browser session
        await driver.quit();
    }
})();