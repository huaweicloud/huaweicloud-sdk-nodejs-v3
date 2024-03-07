

export class OutputRespOutputResult {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): OutputRespOutputResult {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): OutputRespOutputResult {
        this['value'] = value;
        return this;
    }
}