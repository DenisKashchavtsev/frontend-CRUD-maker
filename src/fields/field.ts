interface Field {
    name: string;
    placeholder?: string;
    options?: Array<Option>;
}

interface Option {
    id: number | string;
    value: string;
}
