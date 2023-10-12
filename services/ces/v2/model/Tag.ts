

export class Tag {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): Tag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): Tag {
        this['values'] = values;
        return this;
    }
}