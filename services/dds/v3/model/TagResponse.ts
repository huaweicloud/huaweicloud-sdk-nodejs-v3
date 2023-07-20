

export class TagResponse {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TagResponse {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagResponse {
        this['value'] = value;
        return this;
    }
}