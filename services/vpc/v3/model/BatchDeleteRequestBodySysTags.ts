

export class BatchDeleteRequestBodySysTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): BatchDeleteRequestBodySysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchDeleteRequestBodySysTags {
        this['value'] = value;
        return this;
    }
}