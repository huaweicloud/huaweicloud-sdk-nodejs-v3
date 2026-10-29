

export class CustomParameter {
    public isPrivate?: boolean;
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withIsPrivate(isPrivate: boolean): CustomParameter {
        this['isPrivate'] = isPrivate;
        return this;
    }
    public withKey(key: string): CustomParameter {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CustomParameter {
        this['value'] = value;
        return this;
    }
}