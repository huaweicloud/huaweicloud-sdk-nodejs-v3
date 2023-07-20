

export class Tag {
    public type?: string;
    public key?: string;
    public values?: Array<string>;
    public constructor(type?: string, key?: string, values?: Array<string>) { 
        this['type'] = type;
        this['key'] = key;
        this['values'] = values;
    }
    public withType(type: string): Tag {
        this['type'] = type;
        return this;
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