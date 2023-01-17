import {IField} from "./ifield";

export class InputType implements IField {
    public name: string;
    public placeholder: string;

    /**
     * @param name
     * @param placeholder
     */
    constructor(name: string, placeholder: string) {
        this.name = name;
        this.placeholder = placeholder
    }
}