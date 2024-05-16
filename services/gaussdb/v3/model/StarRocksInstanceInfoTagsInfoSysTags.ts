

export class StarRocksInstanceInfoTagsInfoSysTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): StarRocksInstanceInfoTagsInfoSysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): StarRocksInstanceInfoTagsInfoSysTags {
        this['value'] = value;
        return this;
    }
}