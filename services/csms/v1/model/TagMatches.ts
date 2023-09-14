

export class TagMatches {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagMatches {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagMatches {
        this['value'] = value;
        return this;
    }
}