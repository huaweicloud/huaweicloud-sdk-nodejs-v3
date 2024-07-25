

export class TagsPojo {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagsPojo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagsPojo {
        this['value'] = value;
        return this;
    }
}