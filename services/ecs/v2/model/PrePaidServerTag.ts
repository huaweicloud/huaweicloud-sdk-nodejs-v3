

export class PrePaidServerTag {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): PrePaidServerTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): PrePaidServerTag {
        this['value'] = value;
        return this;
    }
}