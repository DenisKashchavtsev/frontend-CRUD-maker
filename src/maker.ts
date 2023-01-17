import fs from 'fs-extra'
import {Entity} from "./entity";
import {Console} from "./console";

export class Maker {
    private entity: Entity;

    constructor() {
        this.entity = new Console().getEntity();
        this.getTemplates()
    }

    private getTemplates() {
        try {
            const files = fs.readdirSync('./templates', 'utf8', '');
        } catch (e) {
        }
    }
}