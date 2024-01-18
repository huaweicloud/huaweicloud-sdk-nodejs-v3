

export class VpnResourceTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): VpnResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): VpnResourceTag {
        this['value'] = value;
        return this;
    }
}