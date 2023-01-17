export interface IOption {
    id: number | string;
    value: string | number;
}

export class Option implements IOption {
    id: string | number;
    value: string | number;

    constructor(id: string | number, value: string | number) {
        this.id = id;
        this.value = value;
    }
}