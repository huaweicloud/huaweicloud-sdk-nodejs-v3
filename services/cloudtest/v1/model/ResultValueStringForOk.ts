

export class ResultValueStringForOk {
    public value?: string;
    public constructor() { 
    }
    public withValue(value: string): ResultValueStringForOk {
        this['value'] = value;
        return this;
    }
}