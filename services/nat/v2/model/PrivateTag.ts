

export class PrivateTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): PrivateTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): PrivateTag {
        this['value'] = value;
        return this;
    }
}