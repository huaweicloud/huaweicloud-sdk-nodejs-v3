

export class TagsInfo {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagsInfo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagsInfo {
        this['value'] = value;
        return this;
    }
}