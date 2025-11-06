

export class TagsRequestBody {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): TagsRequestBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagsRequestBody {
        this['value'] = value;
        return this;
    }
}