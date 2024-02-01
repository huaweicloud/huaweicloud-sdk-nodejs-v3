

export class QueryTag {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): QueryTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): QueryTag {
        this['values'] = values;
        return this;
    }
}