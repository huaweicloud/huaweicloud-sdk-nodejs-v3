

export class TagReq {
    public key: string;
    public values: Array<string>;
    public constructor(key?: any, values?: any) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): TagReq {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagReq {
        this['values'] = values;
        return this;
    }
}