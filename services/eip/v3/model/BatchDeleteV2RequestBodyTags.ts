

export class BatchDeleteV2RequestBodyTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): BatchDeleteV2RequestBodyTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchDeleteV2RequestBodyTags {
        this['value'] = value;
        return this;
    }
}