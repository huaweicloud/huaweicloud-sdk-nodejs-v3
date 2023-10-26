

export class SysTags {
    public value?: string;
    public key?: string;
    public constructor(value?: string, key?: string) { 
        this['value'] = value;
        this['key'] = key;
    }
    public withValue(value: string): SysTags {
        this['value'] = value;
        return this;
    }
    public withKey(key: string): SysTags {
        this['key'] = key;
        return this;
    }
}