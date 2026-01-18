import { expect } from '@wdio/globals'
import CheckboxesPage from '../pageobjects/checkboxes.page'

describe('Checkboxes', () => {
    it('should check and uncheck checkboxes', async () => {
        await CheckboxesPage.open()

        const firstCheckbox = CheckboxesPage.getCheckbox(0);
        const secondCheckbox = CheckboxesPage.getCheckbox(1);

        await CheckboxesPage.checkCheckbox(0)
        await expect(firstCheckbox).toBeChecked()

        await CheckboxesPage.uncheckCheckbox(0)
        await expect(firstCheckbox).not.toBeChecked()

        await CheckboxesPage.checkCheckbox(1)
        await expect(secondCheckbox).toBeChecked()

        await CheckboxesPage.uncheckCheckbox(1)
        await expect(secondCheckbox).not.toBeChecked()
    })

    it('should toggle checkboxes multiple times', async () => {
        await CheckboxesPage.open()

        const checkbox = CheckboxesPage.getCheckbox(0);

        await checkbox.click()
        await expect(checkbox).toBeChecked()

        await checkbox.click()
        await expect(checkbox).not.toBeChecked()

        await checkbox.click()
        await expect(checkbox).toBeChecked()
    })
})
