

export class ScsResourceTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ScsResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ScsResourceTag {
        this['value'] = value;
        return this;
    }
}