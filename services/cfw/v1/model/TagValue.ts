

export class TagValue {
    public key?: string;
    public value?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagValue {
        this['key'] = key;
        return this;
    }
    public withValue(value: Array<string>): TagValue {
        this['value'] = value;
        return this;
    }
}