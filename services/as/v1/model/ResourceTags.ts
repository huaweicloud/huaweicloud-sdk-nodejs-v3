

export class ResourceTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTags {
        this['value'] = value;
        return this;
    }
}