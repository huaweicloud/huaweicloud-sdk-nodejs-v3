

export class CsbResourceTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): CsbResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CsbResourceTag {
        this['value'] = value;
        return this;
    }
}