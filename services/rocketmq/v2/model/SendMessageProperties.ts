

export class SendMessageProperties {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): SendMessageProperties {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): SendMessageProperties {
        this['value'] = value;
        return this;
    }
}