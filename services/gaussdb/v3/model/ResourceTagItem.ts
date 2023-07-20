

export class ResourceTagItem {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ResourceTagItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTagItem {
        this['value'] = value;
        return this;
    }
}