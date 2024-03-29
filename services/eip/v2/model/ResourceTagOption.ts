

export class ResourceTagOption {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ResourceTagOption {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTagOption {
        this['value'] = value;
        return this;
    }
}