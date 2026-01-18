import { expect } from '@wdio/globals'
import DynamicControlsPage from '../pageobjects/dynamic-controls.page'

describe('Dynamic Controls', () => {
    it('should remove and add checkbox', async () => {
        await DynamicControlsPage.open()

        await expect(DynamicControlsPage.checkbox).toBeExisting()
        await DynamicControlsPage.clickRemove()
        await expect(DynamicControlsPage.checkbox).not.toBeExisting()
        await expect(DynamicControlsPage.messageText).toHaveText("It's gone!")

        await DynamicControlsPage.clickAdd()
        await expect(DynamicControlsPage.checkbox).toBeExisting()
        await expect(DynamicControlsPage.messageText).toHaveText("It's back!")
    })

    it('should enable and disable input field', async () => {
        await DynamicControlsPage.open()

        await expect(DynamicControlsPage.inputField).toBeDisabled()
        await DynamicControlsPage.clickEnable()
        await expect(DynamicControlsPage.inputField).toBeEnabled()
        await expect(DynamicControlsPage.enableMessageText).toHaveText("It's enabled!")

        await DynamicControlsPage.clickDisable()
        await expect(DynamicControlsPage.inputField).toBeDisabled()
        await expect(DynamicControlsPage.enableMessageText).toHaveText("It's disabled!")
    })
})
