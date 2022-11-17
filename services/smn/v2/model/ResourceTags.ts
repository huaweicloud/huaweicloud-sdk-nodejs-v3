

export class ResourceTags {
    public key: string;
    public values: Array<string>;
    public constructor(key?: any, values?: any) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): ResourceTags {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ResourceTags {
        this['values'] = values;
        return this;
    }
}