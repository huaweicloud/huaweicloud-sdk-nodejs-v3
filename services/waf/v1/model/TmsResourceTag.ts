

export class TmsResourceTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TmsResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsResourceTag {
        this['value'] = value;
        return this;
    }
}