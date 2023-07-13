

export class TagEntity {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagEntity {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagEntity {
        this['value'] = value;
        return this;
    }
}