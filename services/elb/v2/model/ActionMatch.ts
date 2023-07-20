

export class ActionMatch {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ActionMatch {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ActionMatch {
        this['value'] = value;
        return this;
    }
}