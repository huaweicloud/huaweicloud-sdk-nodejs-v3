

export class GetAccountTagsV2 {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): GetAccountTagsV2 {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): GetAccountTagsV2 {
        this['values'] = values;
        return this;
    }
}