

export class ResourceTagInfoBean {
    public key?: string;
    public value?: string;
    public constructor(value?: string) { 
        this['value'] = value;
    }
    public withKey(key: string): ResourceTagInfoBean {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTagInfoBean {
        this['value'] = value;
        return this;
    }
}