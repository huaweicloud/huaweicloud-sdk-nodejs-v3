

export class ListTagFilter {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): ListTagFilter {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ListTagFilter {
        this['values'] = values;
        return this;
    }
}