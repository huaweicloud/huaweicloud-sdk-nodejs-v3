

export class ResultValueString {
    public value?: string;
    public constructor() { 
    }
    public withValue(value: string): ResultValueString {
        this['value'] = value;
        return this;
    }
}