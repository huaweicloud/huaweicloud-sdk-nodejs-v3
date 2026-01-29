

export class TagInfo {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
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