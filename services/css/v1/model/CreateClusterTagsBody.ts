

export class CreateClusterTagsBody {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CreateClusterTagsBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateClusterTagsBody {
        this['value'] = value;
        return this;
    }
}