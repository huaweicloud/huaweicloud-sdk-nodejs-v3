

export class TagsResponse {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TagsResponse {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagsResponse {
        this['value'] = value;
        return this;
    }
}