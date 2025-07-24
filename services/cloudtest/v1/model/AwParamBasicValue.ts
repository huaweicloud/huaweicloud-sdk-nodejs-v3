

export class AwParamBasicValue {
    public value?: string;
    private 'value_range'?: string;
    public constructor() { 
    }
    public withValue(value: string): AwParamBasicValue {
        this['value'] = value;
        return this;
    }
    public withValueRange(valueRange: string): AwParamBasicValue {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
}