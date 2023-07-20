

export class InstanceTagResult {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): InstanceTagResult {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): InstanceTagResult {
        this['value'] = value;
        return this;
    }
}