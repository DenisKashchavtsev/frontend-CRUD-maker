import fs from 'fs-extra'
import * as inquirer from 'inquirer';
import {Entity} from "./entity";

export class Maker {
    private entity: Entity;

    constructor() {
        this.entity = new Entity();
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

    private build()
    {
        inquirer.prompt([
                {
                    name: 'crud name',
                    message: 'Message crud name',
                    default: 'product'
                },
            ])
            .then(answer => {
                console.log(answer)
                this.entity.setName(answer)
            });
    }
}