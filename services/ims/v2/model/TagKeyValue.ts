

export class TagKeyValue {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
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