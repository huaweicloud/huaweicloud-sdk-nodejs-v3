

export class KvItem {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): KvItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): KvItem {
        this['value'] = value;
        return this;
    }
}