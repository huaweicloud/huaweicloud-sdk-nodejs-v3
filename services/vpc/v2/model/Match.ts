

export class Match {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): Match {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Match {
        this['value'] = value;
        return this;
    }
}