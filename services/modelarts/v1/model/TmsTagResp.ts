

export class TmsTagResp {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TmsTagResp {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsTagResp {
        this['value'] = value;
        return this;
    }
}