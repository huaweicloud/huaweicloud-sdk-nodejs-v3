

export class CreateChInstanceRequestBodyTagsInfoSysTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CreateChInstanceRequestBodyTagsInfoSysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateChInstanceRequestBodyTagsInfoSysTags {
        this['value'] = value;
        return this;
    }
}