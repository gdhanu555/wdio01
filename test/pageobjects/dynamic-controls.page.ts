import { $ } from '@wdio/globals'
import Page from './page'

class DynamicControlsPage extends Page {
    public get btnRemove () {
        return $('#checkbox-example button');
    }

    public get btnAdd () {
        return $('#checkbox-example button');
    }

    public get checkbox () {
        return $('#checkbox-example input[type="checkbox"]');
    }

    public get btnEnable () {
        return $('#input-example button');
    }

    public get btnDisable () {
        return $('#input-example button');
    }

    public get inputField () {
        return $('#input-example input[type="text"]');
    }

    public get messageText () {
        return $('#checkbox-example #message');
    }

    public get enableMessageText () {
        return $('#input-example #message');
    }

    public async clickRemove () {
        await this.btnRemove.click();
        await this.messageText.waitForDisplayed({ timeout: 10000 });
    }

    public async clickAdd () {
        await this.btnAdd.click();
        await this.messageText.waitForDisplayed({ timeout: 10000 });
    }

    public async clickEnable () {
        await this.btnEnable.click();
        await this.enableMessageText.waitForDisplayed({ timeout: 10000 });
    }

    public async clickDisable () {
        await this.btnDisable.click();
        await this.enableMessageText.waitForDisplayed({ timeout: 10000 });
    }

    public open () {
        return super.open('dynamic_controls');
    }
}

export default new DynamicControlsPage();
