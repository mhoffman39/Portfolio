const webdriver = require('selenium-webdriver');
const browserstack = require('browserstack-local');
const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;

const capabilities = {
  'browserstack.local': 'true',
	'browser': 'chrome',
  'browser_version': 'latest',
  'os': 'OS X',
  'os_version': 'Big Sur',
  'build': 'browserstack-build-1',
  'name': 'Parallel test 3',
  'project': 'Marketing Website v2',
}

  // Creates an instance of Local
  const bs_local = new browserstack.Local();

  // You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
  const bs_local_args = { key: 'ZMZ6y2dJrv8cMM7JsVCn' };

  // Starts the Local instance with the required arguments.
  bs_local.start(bs_local_args, async function() {
    console.log('Started BrowserStackLocal');

    // Checks if BrowserStack local instance is running.
    console.log('BrowserStackLocal running:', bs_local.isRunning());

    // Your test code goes here, from creating the driver instance till the end, i.e. driver.quit.
    let driver = new webdriver.Builder()
      .usingServer('http://masonhoffman_OWQoHk:ZMZ6y2dJrv8cMM7JsVCn@hub-cloud.browserstack.com/wd/hub')
      .withCapabilities({
        ...capabilities,
        ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
      })
      .build();
    // await driver.get("http://localhost:8000");
    // const learnButton = await driver.findElement(webdriver.By.id('learn')).click();
    // let links = await driver.findElements(webdriver.By.css('a'));
    // console.log(links)
    // for (let i = 0; i < links.length; i ++) {
    //   let url = webdriver.getAttribute('href');
    //   console.log(url)
    // }

    // const inputField = await driver.findElement(webdriver.By.name("q"));
    // await inputField.sendKeys("BrowserStack", webdriver.Key.ENTER); // this submits on desktop browsers
    // try {
    //   await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
    // } catch (e) {
    //   await inputField.submit(); // this helps in mobile browsers
    // }
    // try {
    //   await driver.wait(webdriver.until.titleMatches(/Mason Hoffman/i), 5000);
    //   console.log(await driver.getTitle());
    //   await driver.executeScript(
    //     'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains BrowserStack!"}}'
    //   );
    // } catch (e) {
    //   await driver.executeScript(
    //     'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
    //   );
    // }
    await driver.quit();

    // Stops the Local instance after your test run is completed, i.e after driver.quit.
    bs_local.stop(function() {
      console.log('Stopped BrowserStackLocal');
    });
  });

