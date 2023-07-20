

export class TagResp {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): TagResp {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagResp {
        this['values'] = values;
        return this;
    }
}