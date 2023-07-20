

export class ProjectTag {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): ProjectTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ProjectTag {
        this['values'] = values;
        return this;
    }
}