

export class BatchAddServerTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): BatchAddServerTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchAddServerTag {
        this['value'] = value;
        return this;
    }
}