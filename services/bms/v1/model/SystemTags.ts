

export class SystemTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): SystemTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SystemTags {
        this['value'] = value;
        return this;
    }
}