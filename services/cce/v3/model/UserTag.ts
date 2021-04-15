

export class UserTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): UserTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): UserTag {
        this['value'] = value;
        return this;
    }
}