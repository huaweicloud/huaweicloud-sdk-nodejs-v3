

export class TagFilter {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): TagFilter {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagFilter {
        this['values'] = values;
        return this;
    }
}