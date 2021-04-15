

export class ServerTag {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
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