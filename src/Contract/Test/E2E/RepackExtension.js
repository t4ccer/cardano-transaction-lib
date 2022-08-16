/* Code copied with slight modifications from puppeteer-crx, MIT licensed */

exports._repackExtension = function (browser) {
  return function (extensionDir) {
    return async function () {
      const page = await browser.newPage();
      await page.goto("chrome://extensions");

      const gotoExtManager = async function () {
        document
          .querySelector("body > extensions-manager")
          .shadowRoot.querySelector("extensions-toolbar")
          .shadowRoot.querySelector("#devMode")
          .click();

        document
          .querySelector("body > extensions-manager")
          .shadowRoot.querySelector("extensions-toolbar")
          .shadowRoot.querySelector("#packExtensions")
          .click();
      };
      await page.evaluate(gotoExtManager);

      const input = await page.evaluateHandle(
        `document.querySelector("body > extensions-manager").shadowRoot.querySelector("extensions-toolbar").shadowRoot.querySelector("extensions-pack-dialog").shadowRoot.querySelector("#rootDir").shadowRoot.querySelector("#input")`
      );

      await input.click();
      await input.focus();
      await input.type(extensionDir);

      const packit = async function () {
        const pack = document
          .querySelector("body > extensions-manager")
          .shadowRoot.querySelector("extensions-toolbar")
          .shadowRoot.querySelector("extensions-pack-dialog")
          .shadowRoot.querySelector(
            "#dialog > div:nth-child(3) > cr-button.action-button"
          );
        pack.disabled = false;
        pack.click();
      };

      await page.evaluate(packit);
    };
  };
};
