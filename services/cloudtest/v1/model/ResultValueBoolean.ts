

export class ResultValueBoolean {
    public value?: boolean;
    public constructor() { 
    }
    public withValue(value: boolean): ResultValueBoolean {
        this['value'] = value;
        return this;
    }
}