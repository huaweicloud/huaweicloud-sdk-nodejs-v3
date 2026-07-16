

export class UpdateImageGroupRequestBodyTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): UpdateImageGroupRequestBodyTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): UpdateImageGroupRequestBodyTags {
        this['value'] = value;
        return this;
    }
}