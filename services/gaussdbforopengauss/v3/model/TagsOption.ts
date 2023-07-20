

export class TagsOption {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TagsOption {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagsOption {
        this['value'] = value;
        return this;
    }
}