

export class NodeTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): NodeTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): NodeTag {
        this['value'] = value;
        return this;
    }
}