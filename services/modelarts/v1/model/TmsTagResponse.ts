

export class TmsTagResponse {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TmsTagResponse {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsTagResponse {
        this['value'] = value;
        return this;
    }
}