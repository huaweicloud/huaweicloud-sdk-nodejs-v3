

export class Tag {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): Tag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Tag {
        this['value'] = value;
        return this;
    }
}