

export class AnalysisScriptParam {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): AnalysisScriptParam {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): AnalysisScriptParam {
        this['value'] = value;
        return this;
    }
}