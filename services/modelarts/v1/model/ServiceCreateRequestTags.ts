

export class ServiceCreateRequestTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ServiceCreateRequestTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ServiceCreateRequestTags {
        this['value'] = value;
        return this;
    }
}