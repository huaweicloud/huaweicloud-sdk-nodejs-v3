

export class TagInfo {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagInfo {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagInfo {
        this['values'] = values;
        return this;
    }
}