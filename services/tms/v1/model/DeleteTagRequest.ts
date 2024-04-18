

export class DeleteTagRequest {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): DeleteTagRequest {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): DeleteTagRequest {
        this['value'] = value;
        return this;
    }
}