

export class TmsKeyValue {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TmsKeyValue {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsKeyValue {
        this['value'] = value;
        return this;
    }
}