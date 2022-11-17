

export class CreateResourceTagRequestBodyTag {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CreateResourceTagRequestBodyTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateResourceTagRequestBodyTag {
        this['value'] = value;
        return this;
    }
}