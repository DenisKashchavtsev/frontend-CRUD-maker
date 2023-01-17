import {IField} from "./fields/ifield";

export class Entity {
    protected name: string;
    protected fields: Array<IField> = [];

    /**
     * @param name
     */
    public setName(name: string) {
        this.name = name;
    }

    /**
     * @param field
     */
    public addField(field: IField) {
        this.fields.push(field);
    }
}