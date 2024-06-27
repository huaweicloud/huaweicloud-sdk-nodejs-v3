

export class DeleteResourceTagRequestBody {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): DeleteResourceTagRequestBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): DeleteResourceTagRequestBody {
        this['value'] = value;
        return this;
    }
}