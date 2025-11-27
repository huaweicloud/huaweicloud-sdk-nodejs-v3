

export class SecurityProfile {
    public key?: string;
    public value?: object;
    public constructor(key?: string, value?: object) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): SecurityProfile {
        this['key'] = key;
        return this;
    }
    public withValue(value: object): SecurityProfile {
        this['value'] = value;
        return this;
    }
}