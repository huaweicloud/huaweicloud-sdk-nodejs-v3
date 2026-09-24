

export class TagsResp {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagsResp {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagsResp {
        this['values'] = values;
        return this;
    }
}