

export class CreateInstanceRequestBodyResourceTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): CreateInstanceRequestBodyResourceTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateInstanceRequestBodyResourceTags {
        this['value'] = value;
        return this;
    }
}