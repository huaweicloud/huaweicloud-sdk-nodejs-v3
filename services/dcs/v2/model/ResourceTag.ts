

export class ResourceTag {
    public key: string;
    public value?: string;
    public constructor(key?: any) { 
        this['key'] = key;
    }
    public withKey(key: string): ResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTag {
        this['value'] = value;
        return this;
    }
}