

export class TagItem {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagItem {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagItem {
        this['values'] = values;
        return this;
    }
}