

export class EpResourceTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): EpResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): EpResourceTag {
        this['value'] = value;
        return this;
    }
}