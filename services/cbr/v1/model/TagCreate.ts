

export class TagCreate {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TagCreate {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagCreate {
        this['value'] = value;
        return this;
    }
}