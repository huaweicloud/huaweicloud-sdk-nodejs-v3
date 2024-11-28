

export class CreateTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): CreateTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateTag {
        this['value'] = value;
        return this;
    }
}