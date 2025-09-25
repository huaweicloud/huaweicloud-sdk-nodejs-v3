

export class Dictionary {
    public code?: string;
    public value?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withCode(code: string): Dictionary {
        this['code'] = code;
        return this;
    }
    public withValue(value: string): Dictionary {
        this['value'] = value;
        return this;
    }
    public withValues(values: Array<string>): Dictionary {
        this['values'] = values;
        return this;
    }
}