

export class DeleteResourceTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): DeleteResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): DeleteResourceTag {
        this['value'] = value;
        return this;
    }
}