

export class Tags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): Tags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Tags {
        this['value'] = value;
        return this;
    }
}