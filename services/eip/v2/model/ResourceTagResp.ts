

export class ResourceTagResp {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceTagResp {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTagResp {
        this['value'] = value;
        return this;
    }
}