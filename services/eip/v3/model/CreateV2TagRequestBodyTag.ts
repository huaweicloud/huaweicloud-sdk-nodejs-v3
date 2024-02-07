

export class CreateV2TagRequestBodyTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CreateV2TagRequestBodyTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateV2TagRequestBodyTag {
        this['value'] = value;
        return this;
    }
}