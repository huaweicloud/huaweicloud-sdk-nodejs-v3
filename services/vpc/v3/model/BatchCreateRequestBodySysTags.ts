

export class BatchCreateRequestBodySysTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): BatchCreateRequestBodySysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchCreateRequestBodySysTags {
        this['value'] = value;
        return this;
    }
}