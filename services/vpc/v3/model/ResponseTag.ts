

export class ResponseTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ResponseTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResponseTag {
        this['value'] = value;
        return this;
    }
}