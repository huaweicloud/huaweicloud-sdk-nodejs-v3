

export class SysTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): SysTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SysTag {
        this['value'] = value;
        return this;
    }
}