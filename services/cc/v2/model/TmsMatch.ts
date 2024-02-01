

export class TmsMatch {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TmsMatch {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsMatch {
        this['value'] = value;
        return this;
    }
}