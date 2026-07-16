

export class PoolTag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): PoolTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): PoolTag {
        this['values'] = values;
        return this;
    }
}