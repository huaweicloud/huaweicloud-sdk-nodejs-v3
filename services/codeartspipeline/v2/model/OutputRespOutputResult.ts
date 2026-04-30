

export class OutputRespOutputResult {
    public key?: string;
    public value?: object;
    public constructor() { 
    }
    public withKey(key: string): OutputRespOutputResult {
        this['key'] = key;
        return this;
    }
    public withValue(value: object): OutputRespOutputResult {
        this['value'] = value;
        return this;
    }
}