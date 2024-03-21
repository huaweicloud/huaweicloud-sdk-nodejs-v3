

export class ResourceTagInfo {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ResourceTagInfo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTagInfo {
        this['value'] = value;
        return this;
    }
}