

export class TagsBody {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): TagsBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagsBody {
        this['value'] = value;
        return this;
    }
}