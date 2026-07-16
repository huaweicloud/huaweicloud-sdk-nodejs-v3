

export class InferTmsTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): InferTmsTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): InferTmsTag {
        this['value'] = value;
        return this;
    }
}