

export class OriginRequestHeader {
    public name: string;
    public value?: string;
    public action: string;
    public constructor(name?: any, action?: any) { 
        this['name'] = name;
        this['action'] = action;
    }
    public withName(name: string): OriginRequestHeader {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): OriginRequestHeader {
        this['value'] = value;
        return this;
    }
    public withAction(action: string): OriginRequestHeader {
        this['action'] = action;
        return this;
    }
}