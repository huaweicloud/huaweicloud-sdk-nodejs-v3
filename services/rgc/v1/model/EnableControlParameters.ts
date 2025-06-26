

export class EnableControlParameters {
    public key?: string;
    public value?: object;
    public constructor(key?: string, value?: object) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): EnableControlParameters {
        this['key'] = key;
        return this;
    }
    public withValue(value: object): EnableControlParameters {
        this['value'] = value;
        return this;
    }
}