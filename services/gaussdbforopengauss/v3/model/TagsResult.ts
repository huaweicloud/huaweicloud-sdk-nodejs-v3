

export class TagsResult {
    public key?: string;
    public value?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagsResult {
        this['key'] = key;
        return this;
    }
    public withValue(value: Array<string>): TagsResult {
        this['value'] = value;
        return this;
    }
}