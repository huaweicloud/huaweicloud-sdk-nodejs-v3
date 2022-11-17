

export class TagMatch {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TagMatch {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagMatch {
        this['value'] = value;
        return this;
    }
}