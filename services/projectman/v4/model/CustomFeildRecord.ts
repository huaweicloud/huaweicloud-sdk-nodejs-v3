

export class CustomFeildRecord {
    public key?: string;
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): CustomFeildRecord {
        this['key'] = key;
        return this;
    }
    public withName(name: string): CustomFeildRecord {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): CustomFeildRecord {
        this['value'] = value;
        return this;
    }
}