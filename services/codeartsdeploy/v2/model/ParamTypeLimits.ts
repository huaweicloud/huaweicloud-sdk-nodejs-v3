

export class ParamTypeLimits {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ParamTypeLimits {
        this['name'] = name;
        return this;
    }
}