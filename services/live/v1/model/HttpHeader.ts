

export class HttpHeader {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): HttpHeader {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): HttpHeader {
        this['value'] = value;
        return this;
    }
}