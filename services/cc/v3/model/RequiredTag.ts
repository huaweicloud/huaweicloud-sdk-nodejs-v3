

export class RequiredTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): RequiredTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): RequiredTag {
        this['value'] = value;
        return this;
    }
}