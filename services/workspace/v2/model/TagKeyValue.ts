

export class TagKeyValue {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagKeyValue {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagKeyValue {
        this['value'] = value;
        return this;
    }
}