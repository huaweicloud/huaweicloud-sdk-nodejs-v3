

export class ResourceAttribute {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceAttribute {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceAttribute {
        this['value'] = value;
        return this;
    }
}