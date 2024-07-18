

export class AutopilotResourceTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): AutopilotResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): AutopilotResourceTag {
        this['value'] = value;
        return this;
    }
}