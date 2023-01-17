import {IField} from "./ifield";
import {IOption} from "./option";

export class Select implements IField {
    public name: string;
    public options: Array<IOption> = [];

    /**
     * @param name
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * @param option
     */
    public addOption(option: IOption) {
        this.options.push(option);
    }
}