export class Select implements Field {
    public name: string;
    public options: Array<Option>;

    /**
     * @param name
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * @param option
     */
    public addOption(option: Option)
    {
        this.options.push(option);
    }
}