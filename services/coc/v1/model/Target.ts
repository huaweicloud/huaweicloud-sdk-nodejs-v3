

export class Target {
    public key?: string;
    public values?: Array<object>;
    public constructor(key?: string, values?: Array<object>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): Target {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<object>): Target {
        this['values'] = values;
        return this;
    }
}