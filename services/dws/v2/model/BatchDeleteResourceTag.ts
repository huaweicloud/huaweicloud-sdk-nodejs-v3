

export class BatchDeleteResourceTag {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): BatchDeleteResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchDeleteResourceTag {
        this['value'] = value;
        return this;
    }
}