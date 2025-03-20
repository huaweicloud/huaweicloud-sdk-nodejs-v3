

export class ResourceQuery {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ResourceQuery {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceQuery {
        this['value'] = value;
        return this;
    }
}