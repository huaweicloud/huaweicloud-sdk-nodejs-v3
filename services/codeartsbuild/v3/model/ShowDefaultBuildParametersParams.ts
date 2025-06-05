

export class ShowDefaultBuildParametersParams {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ShowDefaultBuildParametersParams {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ShowDefaultBuildParametersParams {
        this['value'] = value;
        return this;
    }
}