

export class KeyValueDO {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): KeyValueDO {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): KeyValueDO {
        this['value'] = value;
        return this;
    }
}