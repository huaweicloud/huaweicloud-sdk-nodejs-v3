

export class MessagePropertyList {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): MessagePropertyList {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): MessagePropertyList {
        this['value'] = value;
        return this;
    }
}