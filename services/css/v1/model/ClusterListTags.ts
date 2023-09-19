

export class ClusterListTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ClusterListTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ClusterListTags {
        this['value'] = value;
        return this;
    }
}