

export class Matches {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): Matches {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Matches {
        this['value'] = value;
        return this;
    }
}