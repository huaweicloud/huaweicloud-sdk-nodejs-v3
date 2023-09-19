

export class ShowTagsTagsResp {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ShowTagsTagsResp {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ShowTagsTagsResp {
        this['value'] = value;
        return this;
    }
}