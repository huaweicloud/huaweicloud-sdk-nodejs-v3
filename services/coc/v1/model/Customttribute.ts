

export class Customttribute {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): Customttribute {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Customttribute {
        this['value'] = value;
        return this;
    }
}