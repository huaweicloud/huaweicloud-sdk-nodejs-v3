

export class ResourceInstanceTagRequestMatches {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceInstanceTagRequestMatches {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceInstanceTagRequestMatches {
        this['value'] = value;
        return this;
    }
}