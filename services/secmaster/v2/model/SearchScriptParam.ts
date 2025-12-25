

export class SearchScriptParam {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): SearchScriptParam {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SearchScriptParam {
        this['value'] = value;
        return this;
    }
}