

export class BaremetalServerTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): BaremetalServerTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BaremetalServerTag {
        this['value'] = value;
        return this;
    }
}