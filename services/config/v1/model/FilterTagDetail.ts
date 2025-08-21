

export class FilterTagDetail {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): FilterTagDetail {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): FilterTagDetail {
        this['values'] = values;
        return this;
    }
}