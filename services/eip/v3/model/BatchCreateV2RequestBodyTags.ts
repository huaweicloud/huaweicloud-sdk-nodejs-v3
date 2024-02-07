

export class BatchCreateV2RequestBodyTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): BatchCreateV2RequestBodyTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchCreateV2RequestBodyTags {
        this['value'] = value;
        return this;
    }
}