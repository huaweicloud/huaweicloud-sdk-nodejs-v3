

export class BatchDeleteV2RequestBodySysTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): BatchDeleteV2RequestBodySysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchDeleteV2RequestBodySysTags {
        this['value'] = value;
        return this;
    }
}