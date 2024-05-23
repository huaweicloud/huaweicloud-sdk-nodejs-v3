

export class ResourceUnTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ResourceUnTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceUnTag {
        this['value'] = value;
        return this;
    }
}