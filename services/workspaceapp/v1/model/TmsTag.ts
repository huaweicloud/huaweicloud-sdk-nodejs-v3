

export class TmsTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
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