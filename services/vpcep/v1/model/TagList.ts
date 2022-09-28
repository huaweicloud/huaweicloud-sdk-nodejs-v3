

export class TagList {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagList {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagList {
        this['value'] = value;
        return this;
    }
}