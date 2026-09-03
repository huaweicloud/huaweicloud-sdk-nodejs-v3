

export class CountResourceInstancesReqTags {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): CountResourceInstancesReqTags {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): CountResourceInstancesReqTags {
        this['values'] = values;
        return this;
    }
}