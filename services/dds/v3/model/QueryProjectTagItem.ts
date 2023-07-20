

export class QueryProjectTagItem {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): QueryProjectTagItem {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): QueryProjectTagItem {
        this['values'] = values;
        return this;
    }
}