

export class PublicResourceTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): PublicResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): PublicResourceTag {
        this['value'] = value;
        return this;
    }
}