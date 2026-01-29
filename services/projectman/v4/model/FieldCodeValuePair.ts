

export class FieldCodeValuePair {
    public code?: string;
    public value?: string;
    public constructor() { 
    }
    public withCode(code: string): FieldCodeValuePair {
        this['code'] = code;
        return this;
    }
    public withValue(value: string): FieldCodeValuePair {
        this['value'] = value;
        return this;
    }
}