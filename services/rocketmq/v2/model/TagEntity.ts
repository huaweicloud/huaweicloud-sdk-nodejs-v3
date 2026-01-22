

export class TagEntity {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
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