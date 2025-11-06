

export class DimensionResp {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): DimensionResp {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): DimensionResp {
        this['value'] = value;
        return this;
    }
}