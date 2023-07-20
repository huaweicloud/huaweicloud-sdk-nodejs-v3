

export class InstanceItemTagItem {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): InstanceItemTagItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): InstanceItemTagItem {
        this['value'] = value;
        return this;
    }
}