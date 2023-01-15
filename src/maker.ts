import fs from 'fs-extra'

export class Maker {
    constructor() {
        this.getTemplates()
    }

    private getTemplates()
    {
        try {
            const files = fs.readdirSync('./templates', 'utf8', '');
            console.log(files);

        } catch (e) {
            console.log(e);
        }
    }
}