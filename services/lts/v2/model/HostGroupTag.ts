

export class HostGroupTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): HostGroupTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): HostGroupTag {
        this['value'] = value;
        return this;
    }
}