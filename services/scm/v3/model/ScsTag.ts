

export class ScsTag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): ScsTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ScsTag {
        this['values'] = values;
        return this;
    }
}