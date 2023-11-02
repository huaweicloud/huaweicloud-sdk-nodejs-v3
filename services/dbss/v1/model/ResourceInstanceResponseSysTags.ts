

export class ResourceInstanceResponseSysTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceInstanceResponseSysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceInstanceResponseSysTags {
        this['value'] = value;
        return this;
    }
}