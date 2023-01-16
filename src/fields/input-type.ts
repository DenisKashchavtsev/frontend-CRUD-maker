export class InputType implements Field {
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