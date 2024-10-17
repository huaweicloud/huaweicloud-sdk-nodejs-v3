

export class ResourceTagRequestTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ResourceTagRequestTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTagRequestTags {
        this['value'] = value;
        return this;
    }
}