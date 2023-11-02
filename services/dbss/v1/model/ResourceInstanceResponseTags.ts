

export class ResourceInstanceResponseTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceInstanceResponseTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceInstanceResponseTags {
        this['value'] = value;
        return this;
    }
}