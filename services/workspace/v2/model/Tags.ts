

export class Tags {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
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