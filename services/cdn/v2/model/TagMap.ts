

export class TagMap {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): TagMap {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagMap {
        this['value'] = value;
        return this;
    }
}