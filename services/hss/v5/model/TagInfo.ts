

export class TagInfo {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagInfo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagInfo {
        this['value'] = value;
        return this;
    }
}