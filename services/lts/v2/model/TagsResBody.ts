

export class TagsResBody {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagsResBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagsResBody {
        this['value'] = value;
        return this;
    }
}