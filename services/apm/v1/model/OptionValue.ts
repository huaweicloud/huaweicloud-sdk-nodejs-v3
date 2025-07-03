

export class OptionValue {
    public value?: string;
    public hint?: string;
    public constructor() { 
    }
    public withValue(value: string): OptionValue {
        this['value'] = value;
        return this;
    }
    public withHint(hint: string): OptionValue {
        this['hint'] = hint;
        return this;
    }
}