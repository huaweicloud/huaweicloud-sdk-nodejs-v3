

export class CreateResourceTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CreateResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateResourceTag {
        this['value'] = value;
        return this;
    }
}