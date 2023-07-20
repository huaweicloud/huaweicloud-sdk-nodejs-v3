

export class TagDelWithKeyValue {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): TagDelWithKeyValue {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagDelWithKeyValue {
        this['value'] = value;
        return this;
    }
}