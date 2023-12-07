

export class TagBody {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TagBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagBody {
        this['value'] = value;
        return this;
    }
}