import { $ } from '@wdio/globals'
import Page from './page'

class DropdownPage extends Page {
    public get dropdown () {
        return $('#dropdown');
    }

    public async selectOption (option: string) {
        await this.dropdown.selectByVisibleText(option);
    }

    public async getSelectedOption (): Promise<string> {
        return await this.dropdown.getValue();
    }

    public open () {
        return super.open('dropdown');
    }
}

export default new DropdownPage();
