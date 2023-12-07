

export class PublicTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): PublicTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): PublicTags {
        this['value'] = value;
        return this;
    }
}