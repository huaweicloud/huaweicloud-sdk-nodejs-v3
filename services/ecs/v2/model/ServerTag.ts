

export class ServerTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): ServerTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ServerTag {
        this['value'] = value;
        return this;
    }
}