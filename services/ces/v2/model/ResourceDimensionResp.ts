

export class ResourceDimensionResp {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): ResourceDimensionResp {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ResourceDimensionResp {
        this['value'] = value;
        return this;
    }
}