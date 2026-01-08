

export class ChangeResourceTagOption {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ChangeResourceTagOption {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ChangeResourceTagOption {
        this['value'] = value;
        return this;
    }
}