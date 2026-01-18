import { $$ } from '@wdio/globals'
import Page from './page'

class CheckboxesPage extends Page {
    public get checkboxes () {
        return $$('#checkboxes input[type="checkbox"]');
    }

    public getCheckbox (index: number) {
        return this.checkboxes[index];
    }

    public async checkCheckbox (index: number) {
        const checkbox = this.getCheckbox(index);
        if (!(await checkbox.isSelected())) {
            await checkbox.click();
        }
    }

    public async uncheckCheckbox (index: number) {
        const checkbox = this.getCheckbox(index);
        if (await checkbox.isSelected()) {
            await checkbox.click();
        }
    }

    public open () {
        return super.open('checkboxes');
    }
}

export default new CheckboxesPage();
