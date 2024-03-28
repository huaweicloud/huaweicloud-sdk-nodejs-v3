

export class ResponseInfoHeader {
    public key?: string;
    public value?: object;
    public constructor() { 
    }
    public withKey(key: string): ResponseInfoHeader {
        this['key'] = key;
        return this;
    }
    public withValue(value: object): ResponseInfoHeader {
        this['value'] = value;
        return this;
    }
}