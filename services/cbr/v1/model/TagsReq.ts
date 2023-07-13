

export class TagsReq {
    public key: string;
    public values: Array<string>;
    public constructor(key?: any, values?: any) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): TagsReq {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagsReq {
        this['values'] = values;
        return this;
    }
}