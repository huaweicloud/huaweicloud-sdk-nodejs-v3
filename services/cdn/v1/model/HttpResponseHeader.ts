

export class HttpResponseHeader {
    public name?: string;
    public value?: string;
    public action?: string;
    public constructor(name?: string, action?: string) { 
        this['name'] = name;
        this['action'] = action;
    }
    public withName(name: string): HttpResponseHeader {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): HttpResponseHeader {
        this['value'] = value;
        return this;
    }
    public withAction(action: string): HttpResponseHeader {
        this['action'] = action;
        return this;
    }
}