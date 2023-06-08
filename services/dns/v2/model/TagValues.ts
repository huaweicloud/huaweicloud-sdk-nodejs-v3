

export class TagValues {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagValues {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagValues {
        this['values'] = values;
        return this;
    }
}