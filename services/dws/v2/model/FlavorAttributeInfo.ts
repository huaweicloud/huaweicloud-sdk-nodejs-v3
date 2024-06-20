

export class FlavorAttributeInfo {
    public code?: string;
    public value?: string;
    public constructor(code?: string, value?: string) { 
        this['code'] = code;
        this['value'] = value;
    }
    public withCode(code: string): FlavorAttributeInfo {
        this['code'] = code;
        return this;
    }
    public withValue(value: string): FlavorAttributeInfo {
        this['value'] = value;
        return this;
    }
}