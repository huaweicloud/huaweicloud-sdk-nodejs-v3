

export class TagsSingleValue {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): TagsSingleValue {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagsSingleValue {
        this['value'] = value;
        return this;
    }
}