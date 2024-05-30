

export class BatchDeleteRequestBodyTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): BatchDeleteRequestBodyTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchDeleteRequestBodyTags {
        this['value'] = value;
        return this;
    }
}