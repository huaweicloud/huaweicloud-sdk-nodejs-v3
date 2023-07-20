

export class BatchTagActionTagOption {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): BatchTagActionTagOption {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchTagActionTagOption {
        this['value'] = value;
        return this;
    }
}