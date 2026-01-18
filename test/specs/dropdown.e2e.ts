import { expect } from '@wdio/globals'
import DropdownPage from '../pageobjects/dropdown.page'

describe('Dropdown', () => {
    it('should select options from dropdown', async () => {
        await DropdownPage.open()

        await DropdownPage.selectOption('Option 1')
        await expect(DropdownPage.dropdown).toHaveValue('1')

        await DropdownPage.selectOption('Option 2')
        await expect(DropdownPage.dropdown).toHaveValue('2')
    })

    it('should display selected option', async () => {
        await DropdownPage.open()

        await DropdownPage.selectOption('Option 1')
        const selectedValue = await DropdownPage.getSelectedOption()
        expect(selectedValue).toBe('1')

        await DropdownPage.selectOption('Option 2')
        const selectedValue2 = await DropdownPage.getSelectedOption()
        expect(selectedValue2).toBe('2')
    })
})
