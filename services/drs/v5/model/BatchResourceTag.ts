

export class BatchResourceTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): BatchResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchResourceTag {
        this['value'] = value;
        return this;
    }
}