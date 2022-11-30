

export class PostPaidServerTag {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): PostPaidServerTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): PostPaidServerTag {
        this['value'] = value;
        return this;
    }
}