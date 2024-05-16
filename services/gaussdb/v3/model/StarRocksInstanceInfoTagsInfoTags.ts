

export class StarRocksInstanceInfoTagsInfoTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): StarRocksInstanceInfoTagsInfoTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): StarRocksInstanceInfoTagsInfoTags {
        this['value'] = value;
        return this;
    }
}