import { $, browser } from "@wdio/globals";
import Page from "./page.js";

class LoginPage extends Page {
  // ─── SELECTORS ──────────────────────────────────────────────────────────────
  get applyFirstTimeBtn() {
    return $(
      "body > div:nth-child(2) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)"
    );
  }

  get inputConfirmEmail() {
    return $("#input-137");
  }

  get inputDateOfBirth() {
    return $("#dob");
  }

  get inputEmail() {
    return $("#input-134");
  }

  get inputFirstName() {
    return $("#input-55");
  }

  get inputLastName() {
    return $("#input-58");
  }

  get inputLastFourSSN() {
    return $("#last4Ssn");
  }

  get inputZip() {
    return $("#input-160");
  }

  get LoginButton() {
    return $(".v-card__actions .button");
  }

  get newAppointment() {
    return $(
      "button[class='white--text button v-btn v-btn--contained theme--light v-size--default public-blue button-normal']"
    );
  }

  get nextBtn() {
    return $("//span[contains(@class, 'v-btn__content') and text()=' Next ']");
  }

  get selectLanguage() {
    return $(
      "//div[contains(@class, 'container')]//span[contains(@class, 'v-btn__content') and text()='English']"
    );
  }

  // ─── ACTIONS / UTILITIES ─────────────────────────────────────────────────────
  async login(firstName, lastName, dateOfBirth, lastFourSSN) {
    try {
      await this.selectLanguage.waitForClickable({ timeout: 500000 });
    } catch (error) {
      await browser.reloadSession(); // OR use browser.refresh()
      await this.selectLanguage.waitForClickable({ timeout: 500000 });
    }

    await this.selectLanguage.click();
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputDateOfBirth.setValue(dateOfBirth);
    await this.inputLastFourSSN.setValue(lastFourSSN);

    await browser.waitUntil(
      async () => (await this.inputLastFourSSN.getValue()) === lastFourSSN,
      {
        timeout: 50000,
        timeoutMsg: "SSN input field did not get the expected value in time",
      }
    );

    await this.LoginButton.waitForClickable({ timeout: 50000 });
    await this.LoginButton.click();

    await this.newAppointment.waitForClickable({ timeout: 50000 });
    await this.newAppointment.click();

    await this.applyFirstTimeBtn.waitForClickable({ timeout: 50000 });
    await this.applyFirstTimeBtn.click();

    await this.inputEmail.setValue("xyrus.hz@gmail.com");
    await this.inputConfirmEmail.setValue("xyrus.hz@gmail.com");
    await this.inputZip.setValue("76201");

    await this.nextBtn.waitForClickable({ timeout: 50000 });
    await this.nextBtn.click();
  }

  // ─── PAGE LIFECYCLE ─────────────────────────────────────────────────────────
  open() {
    return super.open();
  }
}

export default new LoginPage();
