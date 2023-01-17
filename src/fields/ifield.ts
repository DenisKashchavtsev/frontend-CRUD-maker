import {IOption} from "./option";

export interface IField {
    name: string;
    placeholder?: string;
    options?: Array<IOption>;
}