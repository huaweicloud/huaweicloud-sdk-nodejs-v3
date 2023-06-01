

export class CustomArgs {
    public type: string;
    public key: string;
    public value: string;
    public constructor(type?: any, key?: any, value?: any) { 
        this['type'] = type;
        this['key'] = key;
        this['value'] = value;
    }
    public withType(type: string): CustomArgs {
        this['type'] = type;
        return this;
    }
    public withKey(key: string): CustomArgs {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CustomArgs {
        this['value'] = value;
        return this;
    }
}