

export class Label {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): Label {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Label {
        this['value'] = value;
        return this;
    }
}