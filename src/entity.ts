export class Entity {
    protected name: string;
    protected fields: Array<Field>;

    /**
     * @param name
     */
    public setName(name: string)
    {
        this.name = name;
    }

    /**
     * @param field
     */
    public addField(field: Field)
    {
        this.fields.push(field);
    }
}