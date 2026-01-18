import { expect } from '@wdio/globals'
import HoversPage from '../pageobjects/hovers.page'

describe('Hovers', () => {
    it('should display caption on hover over first avatar', async () => {
        await HoversPage.open()

        const caption = HoversPage.getUserCaption(0);
        await expect(caption).not.toBeDisplayed()

        await HoversPage.hoverOverAvatar(0)
        await expect(caption).toBeDisplayed()
        await expect(caption).toHaveText(expect.stringContaining('name: user1'))
    })

    it('should display caption on hover over second avatar', async () => {
        await HoversPage.open()

        const caption = HoversPage.getUserCaption(1);
        await expect(caption).not.toBeDisplayed()

        await HoversPage.hoverOverAvatar(1)
        await expect(caption).toBeDisplayed()
        await expect(caption).toHaveText(expect.stringContaining('name: user2'))
    })

    it('should display caption on hover over third avatar', async () => {
        await HoversPage.open()

        const caption = HoversPage.getUserCaption(2);
        await expect(caption).not.toBeDisplayed()

        await HoversPage.hoverOverAvatar(2)
        await expect(caption).toBeDisplayed()
        await expect(caption).toHaveText(expect.stringContaining('name: user3'))
    })
})
