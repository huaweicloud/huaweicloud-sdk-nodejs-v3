

export class ProductExtendResp {
    public code?: string;
    public value?: string;
    public constructor() { 
    }
    public withCode(code: string): ProductExtendResp {
        this['code'] = code;
        return this;
    }
    public withValue(value: string): ProductExtendResp {
        this['value'] = value;
        return this;
    }
}