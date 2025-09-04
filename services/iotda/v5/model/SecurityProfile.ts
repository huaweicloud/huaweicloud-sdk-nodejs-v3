

export class SecurityProfile {
    public key?: string;
    public value?: object;
    public constructor() { 
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