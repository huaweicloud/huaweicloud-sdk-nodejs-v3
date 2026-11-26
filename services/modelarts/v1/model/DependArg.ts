

export class DependArg {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): DependArg {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): DependArg {
        this['value'] = value;
        return this;
    }
}