

export class ScriptParam {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ScriptParam {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ScriptParam {
        this['value'] = value;
        return this;
    }
}