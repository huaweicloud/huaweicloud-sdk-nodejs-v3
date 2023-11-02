

export class ProjectResourceTagResponseTags {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): ProjectResourceTagResponseTags {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ProjectResourceTagResponseTags {
        this['values'] = values;
        return this;
    }
}