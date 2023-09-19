

export class AggTag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): AggTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): AggTag {
        this['values'] = values;
        return this;
    }
}