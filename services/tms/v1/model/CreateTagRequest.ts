

export class CreateTagRequest {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CreateTagRequest {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateTagRequest {
        this['value'] = value;
        return this;
    }
}