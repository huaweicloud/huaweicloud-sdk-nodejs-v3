

export class ProjectResourceTagResponseTags {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
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