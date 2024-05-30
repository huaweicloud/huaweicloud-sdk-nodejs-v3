

export class BatchCreateRequestBodyTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): BatchCreateRequestBodyTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchCreateRequestBodyTags {
        this['value'] = value;
        return this;
    }
}