

export class UserTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): UserTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): UserTags {
        this['value'] = value;
        return this;
    }
}