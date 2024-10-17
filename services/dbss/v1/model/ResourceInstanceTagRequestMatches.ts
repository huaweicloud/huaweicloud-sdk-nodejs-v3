

export class ResourceInstanceTagRequestMatches {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
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