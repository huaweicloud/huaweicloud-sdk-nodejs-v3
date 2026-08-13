

export class TagDetail {
    public key?: string;
    public value?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagDetail {
        this['key'] = key;
        return this;
    }
    public withValue(value: Array<string>): TagDetail {
        this['value'] = value;
        return this;
    }
}