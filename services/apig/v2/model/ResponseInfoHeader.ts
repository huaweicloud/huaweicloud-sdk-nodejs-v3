

export class ResponseInfoHeader {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ResponseInfoHeader {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResponseInfoHeader {
        this['value'] = value;
        return this;
    }
}