import { $, $$ } from '@wdio/globals'
import Page from './page'

class HoversPage extends Page {
    public get avatars () {
        return $$('.figure');
    }

    public getUserCaption (index: number) {
        return $(`.figure:nth-child(${index + 1}) .figcaption`);
    }

    public async hoverOverAvatar (index: number) {
        await this.avatars[index].moveTo();
    }

    public open () {
        return super.open('hovers');
    }
}

export default new HoversPage();
