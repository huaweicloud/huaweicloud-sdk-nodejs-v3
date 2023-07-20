

export class TmsTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TmsTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsTag {
        this['value'] = value;
        return this;
    }
}