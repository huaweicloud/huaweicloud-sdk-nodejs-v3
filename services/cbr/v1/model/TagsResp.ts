

export class TagsResp {
    public key?: string;
    public values?: string;
    public constructor() { 
    }
    public withKey(key: string): TagsResp {
        this['key'] = key;
        return this;
    }
    public withValues(values: string): TagsResp {
        this['values'] = values;
        return this;
    }
}