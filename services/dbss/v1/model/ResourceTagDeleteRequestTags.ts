

export class ResourceTagDeleteRequestTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): ResourceTagDeleteRequestTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTagDeleteRequestTags {
        this['value'] = value;
        return this;
    }
}