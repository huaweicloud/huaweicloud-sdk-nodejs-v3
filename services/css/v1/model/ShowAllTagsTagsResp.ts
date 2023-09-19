

export class ShowAllTagsTagsResp {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): ShowAllTagsTagsResp {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ShowAllTagsTagsResp {
        this['values'] = values;
        return this;
    }
}