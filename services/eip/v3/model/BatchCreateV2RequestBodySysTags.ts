

export class BatchCreateV2RequestBodySysTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): BatchCreateV2RequestBodySysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchCreateV2RequestBodySysTags {
        this['value'] = value;
        return this;
    }
}