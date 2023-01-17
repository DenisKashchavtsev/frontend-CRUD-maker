import inquirer from 'inquirer';
import {Entity} from "./entity";
import {InputType} from "./fields/input-type";
import {Select} from "./fields/select";
import {Option} from "./fields/option";

export class Console {

    private entity: Entity;

    public getEntity() {
        this.entity = new Entity();
        inquirer.prompt([
            {
                name: 'crud_name',
                message: 'Enter the name of your entity',
                default: 'product',
            },
        ])
            .then(answer => {
                this.entity.setName(answer.crud_name)
                this.getField()
            });

        return this.entity;
    }

    private getField() {
        inquirer.prompt([
            {
                name: 'field_type',
                type: "list",
                message: "Choose field type:",
                choices: ["input-type", "select"],
            },
            {
                name: 'field_name',
                message: 'Enter field name:',
                default: 'Name',
            },
        ])
            .then(async answers => {
                if (answers.field_type === 'input-type') {
                    this.entity.addField(new InputType(answers.field_name, 'Enter ' + answers.field_name))
                }
                if (answers.field_type === 'select') {
                    const field = new Select(answers.field_name)
                    await this.getOptions(field)
                }

                inquirer.prompt([
                    {
                        name: "add_more",
                        type: "confirm",
                        message: "Add another field?",
                    },
                ])
                    .then(answers => {
                        if (answers.add_more) {
                            this.getField()
                        }
                    });
            });
    }

    private async getOptions(field) {
        await inquirer.prompt([
            {
                name: 'option_name',
                message: 'Enter option name:',
                default: 'Option name',
            },
            {
                name: 'option_value',
                message: "Enter option value:",
                default: 'Option value',
            },
            {
                name: "add_more",
                type: "confirm",
                message: "Add another option?",
            },
        ])
            .then(async answers => {
                field.addOption(new Option(answers.option_name, answers.option_value))
                if (answers.add_more) {
                    await this.getOptions(field)
                }
            });
    }
}