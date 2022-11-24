

export class Tags {
    public key: string;
    public values: Array<string>;
    public constructor(key?: any, values?: any) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): Tags {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): Tags {
        this['values'] = values;
        return this;
    }
}